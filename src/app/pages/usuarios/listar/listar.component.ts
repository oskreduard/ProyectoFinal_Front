import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Usuario } from '../../../modelos/usuario.model';
import { UsuariosService } from '../../../servicios/usuario.service';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  Usuarios : Usuario[];
  nombresColumnas: string[] = ['Seudonimo','Correo','Rol','Opciones'];
  constructor(private miServicioUsuarios: UsuariosService, private router: Router) { }

  ngOnInit(): void {
    this.listar();
    
  }
  listar():void{
    this.miServicioUsuarios.listar().
      subscribe(data => {
        this.Usuarios=data;
      });
  }
  agregar():void{
    this.router.navigate(["pages/usuarios/crear"]);
  }
  editar(id:string):void{
    this.router.navigate(["pages/usuarios/actualizar/"+id]);
  }
  asignarRol(id:string):void{
    this.router.navigate(["pages/usuarios/asignar/"+id]);
  }
  eliminar(id:string):void{
    Swal.fire({
      title: 'Eliminar Usuario',
      text: "Está seguro que quiere eliminar el usuario?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioUsuarios.eliminar(id).
          subscribe(data => {
            Swal.fire(
              'Eliminado!',
              'El usuario ha sido eliminado correctamente',
              'success'
            )
            this.ngOnInit();
          });
      }
    })
  }
}
