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
    if (this.rutaActiva.snapshot.params.modoAsignar) {
      this.modoBuscar = false;
      this.modoAsignar = true;
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
  asignarRol(id:string):void{
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
