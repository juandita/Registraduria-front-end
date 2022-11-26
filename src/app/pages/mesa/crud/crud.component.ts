import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MesaService} from '../../../servicios/mesa.service';

@Component({
  selector: 'ngx-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
[x: string]: any;

  constructor(private mesaservicio: MesaService,private router: Router) { }

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
      numero_mesa: {
        title: 'Numero Mesa',
        type: 'number',
      },
      votos: {
        title: 'Votos',
        type: 'number',
      },      
    }
  }
  
  source = []

  ngOnInit(): void {

    this.mesaservicio.listar().subscribe(
      data => {
        this.source = data;
      }
    )

  }

  deleteConfirm(event) {

    let mesaEliminar = event.data;

    Swal.fire({
      title: 'Eliminar mesa',
      text: "¿Está seguro que quiere eliminar la mesa " + mesaEliminar.nombre + "?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: "Si, eliminar"
    }).then((result) => {

      if(result.isConfirmed) {
        this.mesaservicio.eliminar(mesaEliminar._id).subscribe(
          data => {
            Swal.fire(
              'Eliminado!',
              'la mesa ha sido eliminado correctamente',
              'success'
            )
            event.confirm.resolve();
          }
        )
      }
    })    
  }

  createConfirm(event) {

    let nuevo_mesa = event.newData;

    delete nuevo_mesa["_id"]
    this.mesaservicio.crear(nuevo_mesa).subscribe(
      data => {
        Swal.fire(
          'Creado!',
          'la mesa ha sido creado correctamente',
          'success'
        )
        event.confirm.resolve(data);
      }
    )
  }

  editConfirm(event) {

    let mesaActualizar = event.newData;

    Swal.fire({
      title: 'Editar mesa',
      text: "¿Está seguro que quiere editar la mesa " + mesaActualizar.nombre + "?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: "Si, editar"
    }).then((result) => {

      if(result.isConfirmed) {
        this.mesaservicio.actualizar(mesaActualizar).subscribe(
          data => {
            Swal.fire(
              'Editado!',
              'la mesa ha sido editado correctamente',
              'success'
            )
            event.confirm.resolve();
          }
        )
      }
    }) 
  }
}