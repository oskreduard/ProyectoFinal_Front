import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { LoginComponent } from './seguridad/login/login.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'mesa',
      loadChildren: () => import('./mesa/mesa.module')
      .then(m => m.MesaModule),
    },
    {
      path: 'candidato',
      loadChildren: () => import('./candidato/candidato.module')
      .then(m => m.CandidatoModule),
    },
    {
      path: 'seguridad',
      loadChildren: () => import('./seguridad/seguridad.module')
      .then(m => m.SeguridadModule),
    },
    {
      path: 'partidos',
      loadChildren: () => import('./partidos/partidos.module')
      .then(m => m.PartidosModule),
    },
    {
      path: 'usuarios',
      loadChildren: () => import('./usuarios/usuarios.module')
      .then(m => m.UsuariosModule),
    },
    {
      path: 'rol',
      loadChildren: () => import('./rol/rol.module')
      .then(m => m.RolModule),
    },
    {
      path: 'permiso',
      loadChildren: () => import('./permiso/permiso.module')
      .then(m => m.PermisoModule),
    },
    {
      path: 'resultado',
      loadChildren: () => import('./resultado/resultado.module')
      .then(m => m.ResultadoModule),
    },
    {
      path: 'permiso-rol',
      loadChildren: () => import('./permiso-rol/permiso-rol.module')
      .then(m => m.PermisoRolModule),
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
