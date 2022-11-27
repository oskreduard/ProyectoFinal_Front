import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { PermisoRol } from '../../../modelos/permiso-rol.model'; 
import { PermisoRolService } from '../../../servicios/permiso-rol.service'; 

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  permisosRols : PermisoRol[];
  nombresColumnas: string[] = ['Url con Permiso','Metodo Pemitido','Rol','Opciones'];
  constructor(private miServicioPermisoRol: PermisoRolService, private router: Router) { }

  ngOnInit(): void {
    this.listar();
    
  }
  listar():void{
    this.miServicioPermisoRol.listar().
      subscribe(data => {
        this.permisosRols=data;
      });
  }
  agregar():void{
    this.router.navigate(["pages/permiso-rol/crear"]);
  }
  editar(id:string):void{
    this.router.navigate(["pages/permiso-rol/actualizar/"+id]);
  }
  
  eliminar(id:string):void{
    Swal.fire({
      title: 'Eliminar Asignacion de Pemriso',
      text: "Está seguro que quiere eliminar la asignación?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioPermisoRol.eliminar(id).
          subscribe(data => {
            Swal.fire(
              'Eliminado!',
              'La Asignacion ha sido eliminada correctamente',
              'success'
            )
            this.ngOnInit();
          });
      }
    })
  }
}
