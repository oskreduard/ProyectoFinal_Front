import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Candidato } from '../../../modelos/candidato.model'; 
import { CandidatoService } from '../../../servicios/candidato.service'; 
import { Mesa } from '../../../modelos/mesa.model';
import { MesaService } from '../../../servicios/mesa.service'; 
import { Resultado } from '../../../modelos/resultado.model';
import { ResultadoService } from '../../../servicios/resultado.service'; 

@Component({
  selector: 'ngx-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {
  
  intentoEnvio: boolean = false;
  candidatos : Candidato[];
  candidatoSeleccionado = "----"
  update(e){
    this.candidatoSeleccionado = e.target.value
    console.log(this.candidatoSeleccionado)
  }
  mesas : Mesa[];
  mesaSeleccionado = "----"
  update_mesa(e){
    this.mesaSeleccionado = e.target.value
    console.log(this.mesaSeleccionado)
  }
  modoCreacion: boolean = true;
  id_resultado: string = "";

  elResultado: Resultado = {
    numero_votos: ""
  }
  
  constructor(private miServicioCandidato: CandidatoService,
              private miServicioMesa: MesaService,   
              private miServicioResultado: ResultadoService,             
              private rutaActiva: ActivatedRoute, 
              private router: Router) { }

  ngOnInit(): void {
   
    this.listar_candidatos();    
    this.listar_mesas();

    if (this.rutaActiva.snapshot.params.id_resultado) {
      this.modoCreacion = false;
      this.id_resultado = this.rutaActiva.snapshot.params.id_resultado;
      this.getResultado(this.id_resultado)
    }else{
      this.modoCreacion = true;
    }
  }
  getResultado(id: string) {
    this.miServicioResultado.getResultado(id).
      subscribe(data => {
        this.elResultado = data;
      });
  }
  listar_candidatos():void{
    this.miServicioCandidato.listar().
      subscribe(data => {
        this.candidatos=data;
      });
  }
  listar_mesas():void{
    this.miServicioMesa.listar().
      subscribe(data => {
        this.mesas=data;
      });
  }
  agregar():void{
    Swal.fire({
      title: 'Guardar el Resultado',
      text: "Está seguro que quiere guardar el Resultado?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Asignar'
    }).then((result) => {
      if (result.isConfirmed &&this.validarDatosCompletos()) {
        this.intentoEnvio = true;
        this.miServicioResultado.crear(this.candidatoSeleccionado,this.mesaSeleccionado,this.elResultado).
          subscribe(data => {
            Swal.fire(
              'Guardado!',
              'El Resultado ha sido creado para el Candidato y la Mesa correctamente',
              'success'
            )
            this.router.navigate(["pages/resultado/listar"]);
          });
      }
    })
  }
  editar():void{
    Swal.fire({
      title: 'Guardar el Resultado',
      text: "Está seguro que quiere guardar el Resultado?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Asignar'
    }).then((result) => {
      if (result.isConfirmed &&this.validarDatosCompletos()) {
        this.intentoEnvio = true;
        this.miServicioResultado.editar(this.elResultado._id,this.candidatoSeleccionado,this.mesaSeleccionado,this.elResultado).
          subscribe(data => {
            Swal.fire(
              'Guardado!',
              'El Resultado ha sido creado para el Candidato y la Mesa correctamente',
              'success'
            )
            this.router.navigate(["pages/resultado/listar"]);
          });
      }
    })
  }
  validarDatosCompletos():boolean{
    this.intentoEnvio=true;
    if(this.elResultado.numero_votos==""){
      return false;
    }else{
      return true;
    }
  }
  
  
}

