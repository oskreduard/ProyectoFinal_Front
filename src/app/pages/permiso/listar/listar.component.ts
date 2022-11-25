import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Permiso } from '../../../modelos/permiso.model'; 
import { PermisoService } from '../../../servicios/permiso.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  permisos : Permiso[];
  nombresColumnas: string[] = ['URL','Metodo','Opciones'];
  constructor(private miServicioPermiso: PermisoService, private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }
  listar():void{
    this.miServicioPermiso.listar().
      subscribe(data => {
        this.permisos=data;
      });
  }
  agregar():void{
    this.router.navigate(["pages/permiso/crear"]);
  }
  editar(id:string):void{
    this.router.navigate(["pages/permiso/actualizar/"+id]);
  }
  eliminar(id:string):void{
    Swal.fire({
      title: 'Eliminar Permiso',
      text: "Está seguro que quiere eliminar el permiso?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioPermiso.eliminar(id).
          subscribe(data => {
            Swal.fire(
              'Eliminado!',
              'El permiso ha sido eliminado correctamente',
              'success'
            )
            this.ngOnInit();
          });
      }
    })
  }
}
