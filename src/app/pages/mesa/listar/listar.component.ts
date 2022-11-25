import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Mesa } from '../../../modelos/mesa.model';
import { MesaService } from '../../../servicios/mesa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  mesas : Mesa[];
  nombresColumnas: string[] = ['Numero','Cantidad Inscritos','Opciones'];
  constructor(private miServicioMesa: MesaService, private router: Router) { }


  ngOnInit(): void {
    this.listar();
  }
  listar():void{
    this.miServicioMesa.listar().
      subscribe(data => {
        this.mesas=data;
      });
  }
  agregar():void{
    this.router.navigate(["pages/mesa/crear"]);
  }
  editar(id:string):void{
    this.router.navigate(["pages/mesa/actualizar/"+id]);
  }
  eliminar(id:string):void{
    Swal.fire({
      title: 'Eliminar mesa',
      text: "Está seguro que quiere eliminar la mesa?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioMesa.eliminar(id).
          subscribe(data => {
            Swal.fire(
              'Eliminado!',
              'El permiso ha sido eliminado correctamente',
              'success'
            )
            this.ngOnInit();
          });
      }
    })
  }

}
