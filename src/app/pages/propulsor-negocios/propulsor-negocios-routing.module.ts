import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropulsorNegociosPage } from './propulsor-negocios.page';

const routes: Routes = [
  {
    path: '',
    component: PropulsorNegociosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropulsorNegociosPageRoutingModule {}
