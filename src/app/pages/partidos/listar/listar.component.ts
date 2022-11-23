import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Partido } from '../../../modelos/partido.model';
import { PartidoService } from '../../../servicios/partido.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  partidos : Partido[];
  nombresColumnas: string[] = ['Nombre','Lema'];
  constructor(private miServicioPartido: PartidoService, private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }
  listar():void{
    this.miServicioPartido.listar().
      subscribe(data => {
        this.partidos=data;
      });
  }
  agregar():void{
    this.router.navigate(["pages/partidos/crear"]);
  }
  editar(id:string):void{
    this.router.navigate(["pages/partidos/actualizar/"+id]);
  }
  eliminar(id:string):void{
    Swal.fire({
      title: 'Eliminar Partido',
      text: "Está seguro que quiere eliminar el Partido?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioPartido.eliminar(id).
          subscribe(data => {
            Swal.fire(
              'Eliminado!',
              'El Partido ha sido eliminado correctamente',
              'success'
            )
            this.ngOnInit();
          });
      }
    })
  }
}
