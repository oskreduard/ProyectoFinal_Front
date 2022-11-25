import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Mesa } from '../../../modelos/mesa.model';
import { MesaService } from '../../../servicios/mesa.service';

@Component({
  selector: 'ngx-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {

  modoCreacion: boolean = true;
  id_mesa: string = "";
  intentoEnvio: boolean = false;
  laMesa: Mesa = {
    numero: "",
    cantidad_inscritos: ""
  }

  constructor(private miServicioMesa: MesaService,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }

    
  ngOnInit(): void {
    if (this.rutaActiva.snapshot.params.id_mesa) {
      this.modoCreacion = false;
      this.id_mesa = this.rutaActiva.snapshot.params.id_mesa;
      this.getMesa(this.id_mesa)
    } else {
      this.modoCreacion = true;
    }
  }
  getMesa(id: string) {
    this.miServicioMesa.getMesa(id).
      subscribe(data => {
        this.laMesa = data;
      });
  }
  agregar(): void {
    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
      this.miServicioMesa.crear(this.laMesa).
        subscribe(data => {
          Swal.fire(
            'Creado',
            'La Mesa ha sido creada correctamente',
            'success'
          )
          this.router.navigate(["pages/mesa/listar"]);
        });
    }
  }
  editar(): void {
    if (this.validarDatosCompletos()) {
      this.miServicioMesa.editar(this.laMesa,this.laMesa._id).
        subscribe(data => {
          Swal.fire(
          'Actualizado',
          'La Mesa ha sido actualizado correctamente',
          'success'
          )
        this.router.navigate(["pages/mesa/listar"]);
        });
    }
    
  }
  validarDatosCompletos():boolean{
    this.intentoEnvio=true;
    if(this.laMesa.numero=="" || this.laMesa.cantidad_inscritos=="" ){
      return false;
    }else{
      return true;
    }
  }

}
