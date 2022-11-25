import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Rol } from '../../../modelos/rol.model';
import { RolService } from '../../../servicios/rol.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  roles : Rol[];
  nombresColumnas: string[] = ['nombre','descripcion','Opciones'];
  constructor(private miServicioRol: RolService, private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }
  listar():void{
    this.miServicioRol.listar().
      subscribe(data => {
        this.roles=data;
      });
  }
  agregar():void{
    this.router.navigate(["pages/rol/crear"]);
  }
  editar(id:string):void{
    this.router.navigate(["pages/rol/actualizar/"+id]);
  }
  eliminar(id:string):void{
    Swal.fire({
      title: 'Eliminar Rol',
      text: "Está seguro que quiere eliminar el Rol?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioRol.eliminar(id).
          subscribe(data => {
            Swal.fire(
              'Eliminado!',
              'El Rol ha sido eliminado correctamente',
              'success'
            )
            this.ngOnInit();
          });
      }
    })
  }
}

