import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NecesidadesSocialesPageRoutingModule } from './necesidades-sociales-routing.module';

import { NecesidadesSocialesPage } from './necesidades-sociales.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NecesidadesSocialesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [NecesidadesSocialesPage]
})
export class NecesidadesSocialesPageModule {}
