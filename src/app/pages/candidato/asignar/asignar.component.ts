import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Candidato } from '../../../modelos/candidato.model'; 
import { Partido } from '../../../modelos/partido.model'; 
import { CandidatoService } from '../../../servicios/candidato.service'; 
import { PartidoService } from '../../../servicios/partido.service'; 

@Component({
  selector: 'ngx-asignar',
  templateUrl: './asignar.component.html',
  styleUrls: ['./asignar.component.scss']
})
export class AsignarComponent implements OnInit {
  
  partidos : Partido[];
  partidoSeleccionado = "----"
  update(e){
    this.partidoSeleccionado = e.target.value
    console.log(this.partidoSeleccionado)
  }

  id_candidato: string = "";
  elCandidato: Candidato = {
    cedula: "",
    numero_resolucion: "",
    nombre:"",
    apellido:""  
  }
  
  constructor(private miServicioCandidato: CandidatoService,
              private miServicioPartido: PartidoService,              
              private rutaActiva: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id_candidato = this.rutaActiva.snapshot.params.id_candidato;
    this.getCandidato(this.id_candidato)
    this.listar();
  }
  listar():void{
    this.miServicioPartido.listar().
      subscribe(data => {
        this.partidos=data;
      });
  }
  getCandidato(id: string) {
    this.miServicioCandidato.getCandidato(id).
      subscribe(data => {
        this.elCandidato = data;
      });
  }
 
  asignarPartido():void{
    Swal.fire({
      title: 'Asignar Partido al Candidato',
      text: "Está seguro que quiere asginar el Partido?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Asignar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioCandidato.asignarPartido(this.elCandidato._id,this.partidoSeleccionado).
          subscribe(data => {
            Swal.fire(
              'Asignado!',
              'El Candidato ha sido asignado al Partido correctamente',
              'success'
            )
            this.router.navigate(["pages/candidato/listar"]);
          });
      }
    })
  }
  
  
}
