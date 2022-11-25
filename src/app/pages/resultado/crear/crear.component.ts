import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Resultado } from '../../../modelos/resultado.model';
import { ResultadoService } from '../../../servicios/resultado.service';

@Component({
  selector: 'ngx-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {

  modoCreacion: boolean = true;
  id_resultado: string = "";
  intentoEnvio: boolean = false;
  elResultado: Resultado = {
    numero_votos:"",
  }

  constructor(private miServicioResultado: ResultadoService,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }

    
  ngOnInit(): void {
    if (this.rutaActiva.snapshot.params.id_resultado) {
      this.modoCreacion = false;
      this.id_resultado = this.rutaActiva.snapshot.params.id_resultado;
      this.getResultado(this.id_resultado) 
    } else {
      this.modoCreacion = true;
    }
  }
  getResultado(id: string) {
    this.miServicioResultado.getResultado(id).
      subscribe(data => {
        this.elResultado = data;
      });
  }
  agregar(): void {
    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
      this.miServicioResultado.crear(this.elResultado).
        subscribe(data => {
          Swal.fire(
            'Creado',
            'el resultado ha sido creada correctamente',
            'success'
          )
          this.router.navigate(["pages/resultado/listar"]);
        });
    }
  }
  editar(): void {
    if (this.validarDatosCompletos()) {
      this.miServicioResultado.editar(this.elResultado,this.elResultado._id).
        subscribe(data => {
          Swal.fire(
          'Actualizado',
          'el resultado ha sido actualizado correctamente',
          'success'
          )
        this.router.navigate(["pages/resultado/listar"]);
        });
    }
    
  }
  validarDatosCompletos():boolean{
    this.intentoEnvio=true;
    if(this.elResultado.numero_votos=="" ){ 
      return false;
    }else{
      return true;
    }
  }

}
