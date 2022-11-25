import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Candidato } from '../../../modelos/candidato.model'; 
import { CandidatoService } from '../../../servicios/candidato.service';

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
  
  cedula_candidato: string = "";
  intentoEnvio: boolean = false;
  elCandidato: Candidato = {
    apellido: "",
    numero_resolucion: "",
    nombre:""
  }
  constructor(private miServicioCandidato: CandidatoService,
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
  getCandidatobyCedula() {
    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
      this.miServicioCandidato.getCandidatobyCedula(this.cedula_candidato).
        subscribe(data => {
          this.elCandidato = data;
          this.router.navigate(["pages/candidato/perfil/"+this.elCandidato._id]);
          console.log(this.router.navigate(["pages/candidato/perfil/"+this.elCandidato._id]))
        },
        error=>{
          Swal.fire({
            title: 'Error ',
            text: "No se encuentran la cedula en la Base de Datos",
            icon: 'error',
            footer: error["error"]["msg"],
            timer:5000
          });
        });
    }
  }
  asignarPartido():void{
    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
      this.miServicioCandidato.getCandidatobyCedula(this.cedula_candidato).
        subscribe(data => {
          this.elCandidato = data;
          this.router.navigate(["pages/candidato/asignar/"+this.elCandidato._id]);
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
      this.miServicioCandidato.getCandidatobyCedula(this.cedula_candidato).
        subscribe(data => {
          this.elCandidato = data;
          this.router.navigate(["pages/candidato/actualizar/"+this.elCandidato._id]);
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
      this.miServicioCandidato.getCandidatobyCedula(this.cedula_candidato).
        subscribe(data => {
          this.elCandidato = data;
          Swal.fire({
            title: 'Eliminar Candidato',
            text: "Está seguro que quiere eliminar el candidato?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar'
          }).then((result) => {
            if (result.isConfirmed) {
              this.miServicioCandidato.eliminar(this.elCandidato._id).
                subscribe(data => {
                  Swal.fire(
                    'Eliminado!',
                    'El usuario ha sido candidato correctamente',
                    'success'
                  )
                  this.router.navigate(["pages/candidato/listar"]);
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
    if(this.cedula_candidato==""){
      return false;
    }else{
      return true;
    }
  }
}
