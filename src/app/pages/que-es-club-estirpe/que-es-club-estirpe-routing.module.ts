import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QueEsClubEstirpePage } from './que-es-club-estirpe.page';

const routes: Routes = [
  {
    path: '',
    component: QueEsClubEstirpePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QueEsClubEstirpePageRoutingModule {}
