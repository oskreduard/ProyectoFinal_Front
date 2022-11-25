import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Candidato } from '../../../modelos/candidato.model';
import { CandidatoService } from '../../../servicios/candidato.service';
import { Router } from '@angular/router';



@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  candidatos : Candidato[];
  nombresColumnas: string[] = ['Cedula','Numero Resolucion','Nombre','Apellido','Partido'];
  constructor(private miServicioCandidato: CandidatoService, private router: Router) { }


  ngOnInit(): void {
    this.listar();
  }
  listar():void{
    this.miServicioCandidato.listar().
      subscribe(data => {
        this.candidatos=data;
      });
  }
  agregar():void{
    this.router.navigate(["pages/candidato/crear"]);
  }
  editar(id:string):void{
    this.router.navigate(["pages/candidato/actualizar/"+id]);
  }
  eliminar(id:string):void{
    Swal.fire({
      title: 'Eliminar candidato',
      text: "Está seguro que quiere eliminar el candidato?",
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
              'El candidato ha sido eliminado correctamente',
              'success'
            )
            this.ngOnInit();
          });
      }
    })
  }

}
