import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClubEmpresarialPageRoutingModule } from './club-empresarial-routing.module';

import { ClubEmpresarialPage } from './club-empresarial.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClubEmpresarialPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ClubEmpresarialPage]
})
export class ClubEmpresarialPageModule {}
