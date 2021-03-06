import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmprendimientoPageRoutingModule } from './emprendimiento-routing.module';

import { EmprendimientoPage } from './emprendimiento.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmprendimientoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EmprendimientoPage]
})
export class EmprendimientoPageModule {}
