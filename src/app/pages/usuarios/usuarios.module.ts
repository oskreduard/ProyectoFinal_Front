import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { NbCardModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { PerfilComponent } from './perfil/perfil.component';
import { AsignarComponent } from './asignar/asignar.component';
import { BuscarComponent } from './buscar/buscar.component';


@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent,
    PerfilComponent,
    AsignarComponent,
    BuscarComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    NbCardModule,
    FormsModule
  ]
})
export class UsuariosModule { }
