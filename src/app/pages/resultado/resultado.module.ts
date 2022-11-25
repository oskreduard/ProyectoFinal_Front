import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultadoRoutingModule } from './resultado-routing.module';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { FormsModule } from '@angular/forms';
import { NbCardModule } from '@nebular/theme';


@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent
  ],
  imports: [
    CommonModule,
    ResultadoRoutingModule,
    NbCardModule,   
    FormsModule
  ]
})
export class ResultadoModule { }
