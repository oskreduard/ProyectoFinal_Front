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
  constructor(private miServicioPartidos: PartidoService,
              private rutaActiva: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    if (this.rutaActiva.snapshot.params.id_partido) {
      this.modoCreacion = false;
      this.id_partido = this.rutaActiva.snapshot.params.id_partido;
      this.getPartido(this.id_partido)
    } else {
      this.modoCreacion = true;
    }
  }
  getPartido(id: string) {
    this.miServicioPartidos.getPartido(id).
      subscribe(data => {
        this.elPartido = data;
      });
  }
  agregar(): void {
    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
      this.miServicioPartidos.crear(this.elPartido).
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
      this.miServicioPartidos.editar(this.elPartido._id, this.elPartido).
        subscribe(data => {
          Swal.fire(
          'Actualizado',
          'El estudiante ha sido actualizado correctamente',
          'success'
          )
        this.router.navigate(["pages/partidos/listar"]);
        });
    }
  }
  validarDatosCompletos():boolean{
    this.intentoEnvio=true;
    if(this.elPartido.lema=="" || this.elPartido.nombre==""){
      return false;
    }else{
      return true;
    }
  }
}
