import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Candidato } from '../../../modelos/candidato.model';
import { CandidatoService } from '../../../servicios/candidato.service';
@Component({
  selector: 'ngx-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {

 
  modoCreacion: boolean = true;
  id_candidato: string = "";
  intentoEnvio: boolean = false;
  elCandidato: Candidato = {
    cedula:"",
    numero_resolucion:"",
    nombre:"",
    apellido:""  
  }

  constructor(private miServicioCandidato: CandidatoService,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }

    
  ngOnInit(): void {
    if (this.rutaActiva.snapshot.params.id_candidato) {
      this.modoCreacion = false;
      this.id_candidato = this.rutaActiva.snapshot.params.id_candidato;
      this.getCandidato(this.id_candidato) // modificar el servicio
    } else {
      this.modoCreacion = true;
    }
  }
  getCandidato(id: string) {
    this.miServicioCandidato.getCandidato(id).
      subscribe(data => {
        this.elCandidato = data;
      });
  }
  agregar(): void {
    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
      this.miServicioCandidato.crear(this.elCandidato).
        subscribe(data => {
          Swal.fire(
            'Creado',
            'el candidato ha sido creada correctamente',
            'success'
          )
          this.router.navigate(["pages/candidato/listar"]);
        });
    }
  }
  editar(): void {
    if (this.validarDatosCompletos()) {
      this.miServicioCandidato.editar(this.elCandidato,this.elCandidato._id).
        subscribe(data => {
          Swal.fire(
          'Actualizado',
          'el Candidato ha sido actualizado correctamente',
          'success'
          )
        this.router.navigate(["pages/candidato/listar"]);
        });
    }
    
  }
  validarDatosCompletos():boolean{
    this.intentoEnvio=true;
    if(this.elCandidato.cedula=="" || this.elCandidato.numero_resolucion==""|| this.elCandidato.nombre=="" || this.elCandidato.apellido==""){ // datos
      return false;
    }else{
      return true;
    }
  }

}
