import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Usuario } from '../../../modelos/usuario.model';
import { UsuariosService } from '../../../servicios/usuario.service';

@Component({
  selector: 'ngx-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {

  modoCreacion: boolean = true;
  id_usuario: string = "";
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
    if (this.rutaActiva.snapshot.params.id_usuario) {
      this.modoCreacion = false;
      this.id_usuario = this.rutaActiva.snapshot.params.id_usuario;
      this.getUsuario(this.id_usuario)
    } else {
      this.modoCreacion = true;
    }
  }
  getUsuario(id: string) {
    this.miServicioUsuarios.getUsuario(id).
      subscribe(data => {
        this.elUsuario = data;
        console.log("cargando info")
      });
  }
  agregar(){
    if (this.validarDatosCompletos()) {
      this.miServicioUsuarios.getUsuariobyEmail(this.elUsuario.correo).
        subscribe(data => {
          this.intentoEnvio = false;
          this.elUsuario.correo = "used";
          console.log(this.elUsuario.correo);
          Swal.fire({
            title: 'Error',
            text: "El correo ya existe en BD",
            icon: 'warning',
            footer: 'Por favor Inicie sesion',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ok'
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload()
            }})     
          
        },error=>{
          if (this.validarDatosCompletos()&&this.elUsuario.correo!="used") {
            this.intentoEnvio = true;
            this.miServicioUsuarios.crear(this.elUsuario).
              subscribe(data => {
                Swal.fire(
                  'Creado',
                  'El Usuario ha sido creado correctamente',
                  'success'
                )
                this.router.navigate(["pages/usuarios/listar"]);
              });
          }
        });
      
    }
  }
  
  editar(): void {
    if (this.validarDatosCompletos()) {
      this.miServicioUsuarios.editar(this.elUsuario._id, this.elUsuario).
        subscribe(data => {
          Swal.fire(
          'Actualizado',
          'El Usuario ha sido actualizado correctamente',
          'success'
          )
        this.router.navigate(["pages/usuarios/listar"]);
        });
    }
  }
  validarDatosCompletos():boolean{
    this.intentoEnvio=true;
    if(this.elUsuario.seudonimo=="" || this.elUsuario.correo=="" || this.elUsuario.contrasena==""){
      return false;
    }else{
      return true;
    }
  }
  
}
