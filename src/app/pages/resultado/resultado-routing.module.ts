import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './listar/listar.component';

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
    path: 'actualizar/:id_resultado',
    component: CrearComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultadoRoutingModule { }
