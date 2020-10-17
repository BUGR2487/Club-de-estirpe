import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropulsorNegociosPageRoutingModule } from './propulsor-negocios-routing.module';

import { PropulsorNegociosPage } from './propulsor-negocios.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PropulsorNegociosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PropulsorNegociosPage]
})
export class PropulsorNegociosPageModule {}
