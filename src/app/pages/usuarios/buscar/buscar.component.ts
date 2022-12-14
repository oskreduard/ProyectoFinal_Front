import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Usuario } from '../../../modelos/usuario.model';
import { UsuariosService } from '../../../servicios/usuario.service';

@Component({
  selector: 'ngx-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {
  modoBuscar: boolean = true;
  modoAsignar: boolean = false;
  modoEliminar: boolean = false;
  modoEditar: boolean = false;
  
  email_usuario: string = "";
  intentoEnvio: boolean = false;
  elUsuario: Usuario = {
    seudonimo: "",
    correo: "",
    contrasena:""
  }
  constructor(private miServicioUsuarios: UsuariosService,
              private rutaActiva: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    console.log(this.modoBuscar)
    console.log(this.modoAsignar)
    console.log(this.modoEliminar)
    console.log(this.modoEditar)
    if (this.rutaActiva.snapshot.routeConfig.path=="buscar/modoAsignar") {
      this.modoBuscar = false;
      this.modoAsignar = true;
    }
    if (this.rutaActiva.snapshot.routeConfig.path=="buscar/modoEliminar") {
      this.modoBuscar = false;
      this.modoEliminar = true;
    }
    if (this.rutaActiva.snapshot.routeConfig.path=="buscar/modoEditar") {
      this.modoBuscar = false;
      this.modoEditar = true;
    }
  }
  getUsuariobyEmail() {
    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
      this.miServicioUsuarios.getUsuariobyEmail(this.email_usuario).
        subscribe(data => {
          this.elUsuario = data;
          this.router.navigate(["pages/usuarios/perfil/"+this.elUsuario._id]);
        },
        error=>{
          Swal.fire({
            title: 'Error ',
            text: "No se encuentran el correo en la Base de Datos",
            icon: 'error',
            footer: error["error"]["msg"],
            timer:5000
          });
        });
    }
  }
  asignarRol():void{
    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
      this.miServicioUsuarios.getUsuariobyEmail(this.email_usuario).
        subscribe(data => {
          this.elUsuario = data;
          this.router.navigate(["pages/usuarios/asignar/"+this.elUsuario._id]);
        },
        error=>{
          Swal.fire({
            title: 'Error ',
            text: "No se encuentran el correo en la Base de Datos",
            icon: 'error',
            footer: error["error"]["msg"],
            timer:5000
          });
        });
    }
  }
  editar():void{
    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
      this.miServicioUsuarios.getUsuariobyEmail(this.email_usuario).
        subscribe(data => {
          this.elUsuario = data;
          this.router.navigate(["pages/usuarios/actualizar/"+this.elUsuario._id]);
        },
        error=>{
          Swal.fire({
            title: 'Error ',
            text: "No se encuentran el correo en la Base de Datos",
            icon: 'error',
            footer: error["error"]["msg"],
            timer:5000
          });
        });
    }
  }
  
  eliminar():void{
    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
      this.miServicioUsuarios.getUsuariobyEmail(this.email_usuario).
        subscribe(data => {
          this.elUsuario = data;
          Swal.fire({
            title: 'Eliminar Usuario',
            text: "Est?? seguro que quiere eliminar el usuario?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar'
          }).then((result) => {
            if (result.isConfirmed) {
              this.miServicioUsuarios.eliminar(this.elUsuario._id).
                subscribe(data => {
                  Swal.fire(
                    'Eliminado!',
                    'El usuario ha sido eliminado correctamente',
                    'success'
                  )
                  this.router.navigate(["pages/usuarios/listar"]);
                });
            }
          })
        
        },
        error=>{
          Swal.fire({
            title: 'Error ',
            text: "No se encuentran el correo en la Base de Datos",
            icon: 'error',
            footer: error["error"]["msg"],
            timer:5000
          });
        });
    }
  }
   validarDatosCompletos():boolean{
    this.intentoEnvio=true;
    if(this.email_usuario==""){
      return false;
    }else{
      return true;
    }
    console.log(this.email_usuario);
    console.log(this.intentoEnvio);
  }
}
