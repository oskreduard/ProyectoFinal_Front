import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Usuario } from '../../../modelos/usuario.model';
import { UsuariosService } from '../../../servicios/usuario.service';

@Component({
  selector: 'ngx-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
    Usuarios: Usuario [];
    id_usuario: string = "";
    elUsuario: Usuario = {
      seudonimo: "",
      correo: "",
      contrasena:""
    }
    nombresColumnas: string[] = ['Seudonimo','Correo','Rol','Descripcion'];
    constructor(private miServicioUsuarios: UsuariosService, 
                 private rutaActiva: ActivatedRoute,
                  private router: Router) { }
            
    ngOnInit(): void {
        this.id_usuario = this.rutaActiva.snapshot.params.id_usuario;
        this.getUsuario(this.id_usuario); 
    }
    getUsuario(id: string) {
      this.miServicioUsuarios.getUsuario(id).
        subscribe(data => {
          this.elUsuario = data;
        });
    }
    
}