import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CandidatoService} from '../../../servicios/candidato.service';

@Component({
  selector: 'ngx-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
[x: string]: any;

  constructor(private candidatoservicio: CandidatoService,private router: Router) { }

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate : true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      _id: {
        title: 'ID',
        type: 'string',
        editable: false,
        addable: false,
      },
      nombre: {
        title: 'Nombre',
        type: 'string',
      },
      id_partido_politico: {
        title: 'ID Partido Politico',
        type: 'string',
      },      
    }
  }
  
  source = []

  ngOnInit(): void {

    this.candidatoservicio.listar().subscribe(
      data => {
        this.source = data;
      }
    )

  }

  deleteConfirm(event) {

    let candidatoEliminar = event.data;

    Swal.fire({
      title: 'Eliminar candidato',
      text: "¿Está seguro que quiere eliminar el candidato " + candidatoEliminar.nombre + "?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: "Si, eliminar"
    }).then((result) => {

      if(result.isConfirmed) {
        this.candidatoservicio.eliminar(candidatoEliminar._id).subscribe(
          data => {
            Swal.fire(
              'Eliminado!',
              'el candidato ha sido eliminado correctamente',
              'success'
            )
            event.confirm.resolve();
          }
        )
      }
    })    
  }

  createConfirm(event) {

    let nuevo_candidato = event.newData;

    delete nuevo_candidato["_id"]
    this.candidatoservicio.crear(nuevo_candidato).subscribe(
      data => {
        Swal.fire(
          'Creado!',
          'el candidato ha sido creado correctamente',
          'success'
        )
        event.confirm.resolve(data);
      }
    )
  }

  editConfirm(event) {

    let candidatoActualizar = event.newData;

    Swal.fire({
      title: 'Editar mesa',
      text: "¿Está seguro que quiere editar el candidato " + candidatoActualizar.nombre + "?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: "Si, editar"
    }).then((result) => {

      if(result.isConfirmed) {
        this.candidatoservicio.actualizar(candidatoActualizar).subscribe(
          data => {
            Swal.fire(
              'Editado!',
              'el candidato ha sido editado correctamente',
              'success'
            )
            event.confirm.resolve();
          }
        )
      }
    }) 
  }
}