import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';
import { Resultado } from '../../../modelos/resultado.model';
import { ResultadoService } from '../../../servicios/resultado.service';
import { Router } from '@angular/router';




@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  resultados : Resultado[];
  nombresColumnas: string[] = ['numero votos','candidato','mesa'];
  constructor(private miServicioCandidato: ResultadoService, private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }
  listar():void{
    this.miServicioCandidato.listar().
      subscribe(data => {
        this.resultados=data;
      });
  }
  agregar():void{
    this.router.navigate(["pages/resultado/crear"]);
  }
  editar(id:string):void{
    this.router.navigate(["pages/resultado/actualizar/"+id]);
  }
  eliminar(id:string):void{
    Swal.fire({
      title: 'Eliminar resultado',
      text: "Está seguro que quiere eliminar el resultado?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioCandidato.eliminar(id).
          subscribe(data => {
            Swal.fire(
              'Eliminado!',
              'El resultado ha sido eliminado correctamente',
              'success'
            )
            this.ngOnInit();
          });
      }
    })
  }

}
