import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatoRoutingModule } from './candidato-routing.module';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { NbActionsModule, NbCardModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { AsignarComponent } from './asignar/asignar.component';
import { BuscarComponent } from './buscar/buscar.component';
import { PerfilComponent } from './perfil/perfil.component';


@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent,
    AsignarComponent,
    BuscarComponent,
    PerfilComponent
    ],
  imports: [
    CommonModule,
    CandidatoRoutingModule,
    NbCardModule,   
    FormsModule,
    NbActionsModule
  ]
})
export class CandidatoModule { }
