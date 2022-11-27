import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Permiso } from '../../../modelos/permiso.model'; 
import { PermisoService } from '../../../servicios/permiso.service'; 
import { Rol } from '../../../modelos/rol.model'; 
import { RolService } from '../../../servicios/rol.service'; 
import { PermisoRol } from '../../../modelos/permiso-rol.model'; 
import { PermisoRolService } from '../../../servicios/permiso-rol.service'; 

@Component({
  selector: 'ngx-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {
  
  intentoEnvio: boolean = false;
  roles : Rol[];
  rolSeleccionado = "----"
  update_rol(e){
    this.rolSeleccionado = e.target.value
    console.log(this.rolSeleccionado)
  }
  permisos : Permiso[];
  permisoSeleccionado = "----"
  update_permiso(e){
    this.permisoSeleccionado = e.target.value
    console.log(this.permisoSeleccionado)
  }
  modoCreacion: boolean = true;
  id_permisoRol: string = "";

  elPermisoRol: PermisoRol = {
    
  }
  
  constructor(private miServicioPermiso: PermisoService,
              private miServicioRol: RolService,   
              private miServicioPermisoRol: PermisoRolService,             
              private rutaActiva: ActivatedRoute, 
              private router: Router) { }

  ngOnInit(): void {
   
    this.listar_permisos();    
    this.listar_roles();

    if (this.rutaActiva.snapshot.params.id_permisoRol) {
      this.modoCreacion = false;
      this.id_permisoRol = this.rutaActiva.snapshot.params.id_permisoRol;
      this.getPermisoRol(this.id_permisoRol)
    }else{
      this.modoCreacion = true;
    }
  }
  getPermisoRol(id: string) {
    this.miServicioPermisoRol.getPermisoRol(id).
      subscribe(data => {
        this.elPermisoRol = data;
      });
  }
  listar_permisos():void{
    this.miServicioPermiso.listar().
      subscribe(data => {
        this.permisos=data;
      });
  }
  listar_roles():void{
    this.miServicioRol.listar().
      subscribe(data => {
        this.roles=data;
      });
  }
  agregar():void{
    Swal.fire({
      title: 'Guardar el Permiso en el Rol',
      text: "Está seguro que quiere guardar el Permiso?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Asignar'
    }).then((result) => {
      if (result.isConfirmed ) {
        this.intentoEnvio = true;
        this.miServicioPermisoRol.crear(this.rolSeleccionado,this.permisoSeleccionado).
          subscribe(data => {
            Swal.fire(
              'Guardado!',
              'El Permiso ha sido creado para el Rol correctamente',
              'success'
            )
            this.router.navigate(["pages/permiso-rol/listar"]);
          });
      }
    })
  }
  editar():void{
    Swal.fire({
      title: 'Guardar el Permiso en el Rol',
      text: "Está seguro que quiere guardar el Permiso?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Asignar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.intentoEnvio = true;
        this.miServicioPermisoRol.editar(this.elPermisoRol._id,this.permisoSeleccionado,this.rolSeleccionado).
          subscribe(data => {
            Swal.fire(
              'Guardado!',
              'El Permiso ha sido creado para el Rol y la Mesa correctamente',
              'success'
            )
            this.router.navigate(["pages/permiso-rol/listar"]);
          });
      }
    })
  }
  validarDatosCompletos():boolean{
    this.intentoEnvio=true;
    if(this.elPermisoRol.numero_votos==""){
      return false;
    }else{
      return true;
    }
  }
  
}

