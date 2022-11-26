import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CuidadanoService } from '../../../servicios/cuidadano.service';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
[x: string]: any;

  constructor(private servicioCuidadano: CuidadanoService, private router: Router) { }

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
      cedula: {
        title: 'Cedula',
        type: 'string',
      },
    }
  }
  source = []

  ngOnInit(): void {

    this.servicioCuidadano.listar().subscribe(
      data => {
        this.source = data;
      }
    )

  }

  deleteConfirm(event) {

    let cuidadano_a_eliminar = event.data;

    Swal.fire({
      title: 'Eliminar cuidadano',
      text: "¿Está seguro que quiere eliminar al cuidadano " + cuidadano_a_eliminar.nombre + "?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: "Si, eliminar"
    }).then((result) => {

      if(result.isConfirmed) {
        this.servicioCuidadano.eliminar(cuidadano_a_eliminar._id).subscribe(
          data => {
            Swal.fire(
              'Eliminado!',
              'El cuidadano ha sido eliminado correctamente',
              'success'
            )
            event.confirm.resolve();
          }
        )
      }
    })    
  }

  createConfirm(event) {    

    let nuevo_cuidadano = event.newData;
    delete nuevo_cuidadano["_id"]
    this.servicioCuidadano.crear(nuevo_cuidadano).subscribe(
      data => {
        Swal.fire(
          'Creado!',
          'El cuidadano ha sido creado correctamente',
          'success'
        )
        event.confirm.resolve(data);
      }
    )
  }

  editConfirm(event) {

    let cuidadanoActualizar = event.newData;

    Swal.fire({
      title: 'Editar cuidadano',
      text: "¿Está seguro que quiere editar al cuidadano " + cuidadanoActualizar.nombre + "?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: "Si, editar"
    }).then((result) => {

      if(result.isConfirmed) {
        this.servicioCuidadano.actualizar(cuidadanoActualizar).subscribe(
          data => {
            Swal.fire(
              'Editado!',
              'El cuidadano ha sido editado correctamente',
              'success'
            )
            event.confirm.resolve();
          }
        )
      }
    }) 


  }
}