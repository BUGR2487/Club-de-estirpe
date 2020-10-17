import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NecesidadesSocialesPage } from './necesidades-sociales.page';

const routes: Routes = [
  {
    path: '',
    component: NecesidadesSocialesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NecesidadesSocialesPageRoutingModule {}
