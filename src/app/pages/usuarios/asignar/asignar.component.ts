import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Rol } from '../../../modelos/rol.model';
import { Usuario } from '../../../modelos/usuario.model';
import { RolService } from '../../../servicios/rol.service';
import { UsuariosService } from '../../../servicios/usuario.service';

@Component({
  selector: 'ngx-asignar',
  templateUrl: './asignar.component.html',
  styleUrls: ['./asignar.component.scss']
})
export class AsignarComponent implements OnInit {
  roles : Rol[];
  id_usuario: string = "";
  elUsuario: Usuario = {
    seudonimo: "",
    correo: "",
    contrasena:""    
  }
  nombresColumnas: string[] = ['Nombre','Descripcion','Opciones'];
  constructor(private miServicioUsuarios: UsuariosService,
              private miServicioRol: RolService,              
              private rutaActiva: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id_usuario = this.rutaActiva.snapshot.params.id_usuario;
    this.getUsuario(this.id_usuario)
    this.listar();
  }
  listar():void{
    this.miServicioRol.listar().
      subscribe(data => {
        this.roles=data;
      });
  }
  getUsuario(id: string) {
    this.miServicioUsuarios.getUsuario(id).
      subscribe(data => {
        this.elUsuario = data;
      });
  }
  asignarRol(idRol:string):void{
    Swal.fire({
      title: 'Asignar Rol al Usuario',
      text: "Está seguro que quiere asginar el Rol?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Asignar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioUsuarios.asignarRol(this.elUsuario._id,idRol).
          subscribe(data => {
            Swal.fire(
              'Asignado!',
              'El usuario ha sido asignado al Rol correctamente',
              'success'
            )
            this.router.navigate(["pages/usuarios/listar"]);
          });
      }
    })
  }
}
