import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'nosotros',
    loadChildren: () => import('./pages/nosotros/nosotros.module').then( m => m.NosotrosPageModule)
  },
  {
    path: 'necesidades-sociales',
    loadChildren: () => import('./pages/necesidades-sociales/necesidades-sociales.module').then( m => m.NecesidadesSocialesPageModule)
  },
  {
    path: 'que-es-club-estirpe',
    loadChildren: () => import('./pages/que-es-club-estirpe/que-es-club-estirpe.module').then( m => m.QueEsClubEstirpePageModule)
  },
  {
    path: 'networking',
    loadChildren: () => import('./pages/networking/networking.module').then( m => m.NetworkingPageModule)
  },
  {
    path: 'capacitacion',
    loadChildren: () => import('./pages/capacitacion/capacitacion.module').then( m => m.CapacitacionPageModule)
  },
  {
    path: 'lifestyle',
    loadChildren: () => import('./pages/lifestyle/lifestyle.module').then( m => m.LifestylePageModule)
  },
  {
    path: 'negocios',
    loadChildren: () => import('./pages/negocios/negocios.module').then( m => m.NegociosPageModule)
  },
  {
    path: 'emprendimiento',
    loadChildren: () => import('./pages/emprendimiento/emprendimiento.module').then( m => m.EmprendimientoPageModule)
  },
  {
    path: 'inversiones',
    loadChildren: () => import('./pages/inversiones/inversiones.module').then( m => m.InversionesPageModule)
  },
  {
    path: 'propulsor-negocios',
    loadChildren: () => import('./pages/propulsor-negocios/propulsor-negocios.module').then( m => m.PropulsorNegociosPageModule)
  },
  {
    path: 'club-empresarial',
    loadChildren: () => import('./pages/club-empresarial/club-empresarial.module').then( m => m.ClubEmpresarialPageModule)
  },
  {
    path: 'coworking',
    loadChildren: () => import('./pages/coworking/coworking.module').then( m => m.CoworkingPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./pages/faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'informacion-contacto',
    loadChildren: () => import('./pages/informacion-contacto/informacion-contacto.module').then( m => m.InformacionContactoPageModule)
  },
  {
    path: 'formulario-contacto',
    loadChildren: () => import('./pages/formulario-contacto/formulario-contacto.module').then( m => m.FormularioContactoPageModule)
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
