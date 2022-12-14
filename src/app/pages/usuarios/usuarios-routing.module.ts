import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignarComponent } from './asignar/asignar.component';
import { BuscarComponent } from './buscar/buscar.component';
import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './listar/listar.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  {
    path: 'listar',
    component: ListarComponent
  },
  {
    path: 'crear',
    component: CrearComponent
  },
  {
    path: 'perfil/:id_usuario',
    component: PerfilComponent
  },
  {
    path: 'actualizar/:id_usuario',
    component: CrearComponent
  },
  {
    path: 'asignar/:id_usuario',
    component: AsignarComponent
  },
  {
    path: 'buscar',
    component: BuscarComponent
  },
  {
    path: 'buscar/modoAsignar',
    component: BuscarComponent
  },
  {
    path: 'asignar/id_usuario',
    component: AsignarComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
