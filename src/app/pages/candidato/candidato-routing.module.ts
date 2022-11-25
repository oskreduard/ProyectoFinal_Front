import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignarComponent } from './asignar/asignar.component';
import { BuscarComponent } from './buscar/buscar.component';
import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './listar/listar.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  { 
    path:'crear',
    component:CrearComponent
  },
  { 
    path:'listar',
    component:ListarComponent
  },
  {
    path: 'actualizar/:id_candidato',
    component: CrearComponent
  },
  {
    path: 'asignar/:id_candidato',
    component: AsignarComponent
  },
  {
    path: 'buscar',
    component: BuscarComponent
  },
  {
    path: 'perfil/:id_candidato',
    component: PerfilComponent
  },
  {
    path: 'buscar/modoEditar',
    component: BuscarComponent
  },
  {
    path: 'buscar/modoEliminar',
    component: BuscarComponent
  },
  {
    path: 'buscar/modoEditar',
    component: BuscarComponent
  },
  {
    path: 'buscar/modoAsignar',
    component: BuscarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatoRoutingModule { }
