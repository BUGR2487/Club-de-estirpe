import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NegociosPageRoutingModule } from './negocios-routing.module';

import { NegociosPage } from './negocios.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NegociosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [NegociosPage]
})
export class NegociosPageModule {}
