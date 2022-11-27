import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Resultado } from '../../../modelos/resultado.model'; 
import { ResultadoService } from '../../../servicios/resultado.service'; 

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  resultados : Resultado[];
  nombresColumnas: string[] = ['Mesa','Candidato','Numero de Votos','Opciones'];
  constructor(private miServicioResultado: ResultadoService, private router: Router) { }

  ngOnInit(): void {
    this.listar();
    
  }
  listar():void{
    this.miServicioResultado.listar().
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
      title: 'Eliminar Resultado',
      text: "Está seguro que quiere eliminar el resultado?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioResultado.eliminar(id).
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
