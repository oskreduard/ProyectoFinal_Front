import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Usuario } from '../../../modelos/usuario.model';
import { SeguridadService } from '../../../servicios/seguridad.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
  export class LoginComponent implements OnInit {
  correo:string="";
  contrasena:string="";
  constructor(private miServicioSeguridad : SeguridadService,
              private router: Router) { 
                localStorage.getItem("sesion");
              }
  /**
  * Método que se ejecuta una vez se carga la página
  */
  ngOnInit(): void {
  }
  /**
  * Este método permite llevar a cabo el proceso de login,
  * llamando al método correspondiente de los servicios
  * para solicitar la validación al backend
  */
  login():void{
    console.log("aqui"+this.correo+" contraseña "+this.contrasena)
    let elUsuario:Usuario={
      correo:this.correo,
      contrasena:this.contrasena
    }
    this.miServicioSeguridad.login(elUsuario).subscribe(
      data=>{
        this.miServicioSeguridad.guardarDatosSesion(data);
        this.miServicioSeguridad.getDatosSesion();
        this.router.navigate(["pages/usuarios/perfil/"+this.miServicioSeguridad.getActiveId()]);
        
      console.log(this.miServicioSeguridad.getActiveId())
      },
      error=>{
        Swal.fire({
        title: 'Error Login',
        text: "Revise los datos ingresados e intente de nuevo",
        icon: 'error',
        footer: error["error"]["msg"],
        timer:5000
        });
      }
    );
  }
}