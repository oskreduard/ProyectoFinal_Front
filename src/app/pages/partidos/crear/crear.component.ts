import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Partido } from '../../../modelos/partido.model'; 
import { PartidoService } from '../../../servicios/partido.service'; 

@Component({
  selector: 'ngx-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {
  
    modoCreacion: boolean = true;
    id_partido: string = "";
    intentoEnvio: boolean = false;
    elPartido: Partido = {
      nombre: "",
      lema: ""
    }
    constructor(private miServicioPartido: PartidoService,
                private rutaActiva: ActivatedRoute,
                private router: Router) { }
  
    ngOnInit(): void {
      if (this.rutaActiva.snapshot.params.elPartido) {
        this.modoCreacion = false;
        this.elPartido = this.rutaActiva.snapshot.params.id_estudiante;
        this.getPartido(this.id_partido)
      } else {
        this.modoCreacion = true;
      }
    }
    getPartido(id: string) {
      this.miServicioPartido.getPartido(id).
        subscribe(data => {
          this.elPartido = data;
        });
    }
    agregar(): void {
      if (this.validarDatosCompletos()) {
        this.intentoEnvio = true;
        this.miServicioPartido.crear(this.elPartido).
          subscribe(data => {
            Swal.fire(
              'Creado',
              'El Partido ha sido creado correctamente',
              'success'
            )
            this.router.navigate(["pages/partidos/listar"]);
          });
      }
    }
    editar(): void {
      if (this.validarDatosCompletos()) {
        this.miServicioPartido.editar(this.elPartido, this.id_partido).
          subscribe(data => {
            Swal.fire(
            'Actualizado',
            'El Partido ha sido actualizado correctamente',
            'success'
            )
          this.router.navigate(["pages/partidos/listar"]);
          });
      }
    }
    validarDatosCompletos():boolean{
      this.intentoEnvio=true;
      if(this.elPartido.nombre=="" || this.elPartido.lema==""){
        return false;
      }else{
        return true;
      }
    }
  }
  