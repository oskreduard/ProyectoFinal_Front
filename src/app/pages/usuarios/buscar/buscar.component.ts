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
    this.email_usuario = this.rutaActiva.snapshot.params.id_usuario;
  }
  getUsuariobyEmail(email: string) {
    this.miServicioUsuarios.getUsuariobyEmail(email).
      subscribe(data => {
        this.elUsuario = data;
        this.router.navigate(["pages/usuarios/perfil/"+this.elUsuario._id]);
      });
  }
   validarDatosCompletos():boolean{
    this.intentoEnvio=true;
    if(this.elUsuario.correo==""){
      return false;
    }else{
      return true;
    }
  }
}
