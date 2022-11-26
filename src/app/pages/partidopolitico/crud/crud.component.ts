import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { PartidopoliticoService } from '../../../servicios/partidopolitico.service';

@Component({
  selector: 'ngx-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
[x: string]: any;

  constructor(private partidopoliticoServicio: PartidopoliticoService,private router: Router) { }

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
      lema: {
        title: 'Lema',
        type: 'string',
      },      
    }
  }
  
  source = []

  ngOnInit(): void {

    this.partidopoliticoServicio.listar().subscribe(
      data => {
        this.source = data;
      }
    )

  }

  deleteConfirm(event) {

    let partidopoliticoEliminar = event.data;

    Swal.fire({
      title: 'Eliminar partido politico',
      text: "¿Está seguro que quiere eliminar el partido politico " + partidopoliticoEliminar.nombre + "?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: "Si, eliminar"
    }).then((result) => {

      if(result.isConfirmed) {
        this.partidopoliticoServicio.eliminar(partidopoliticoEliminar._id).subscribe(
          data => {
            Swal.fire(
              'Eliminado!',
              'El partido politico ha sido eliminado correctamente',
              'success'
            )
            event.confirm.resolve();
          }
        )
      }
    })    
  }

  createConfirm(event) {

    let nuevo_partidopolitico = event.newData;

    delete nuevo_partidopolitico["_id"]
    this.partidopoliticoServicio.crear(nuevo_partidopolitico).subscribe(
      data => {
        Swal.fire(
          'Creado!',
          'El partido politico ha sido creado correctamente',
          'success'
        )
        event.confirm.resolve(data);
      }
    )
  }

  editConfirm(event) {

    let partidopoliticoActualizar = event.newData;

    Swal.fire({
      title: 'Editar partido politico',
      text: "¿Está seguro que quiere editar el partido politico " + partidopoliticoActualizar.nombre + "?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: "Si, editar"
    }).then((result) => {

      if(result.isConfirmed) {
        this.partidopoliticoServicio.actualizar(partidopoliticoActualizar).subscribe(
          data => {
            Swal.fire(
              'Editado!',
              'El partido politico ha sido editado correctamente',
              'success'
            )
            event.confirm.resolve();
          }
        )
      }
    }) 
  }
}