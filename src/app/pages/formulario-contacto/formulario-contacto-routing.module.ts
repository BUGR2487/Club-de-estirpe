import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioContactoPage } from './formulario-contacto.page';

const routes: Routes = [
  {
    path: '',
    component: FormularioContactoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormularioContactoPageRoutingModule {}
