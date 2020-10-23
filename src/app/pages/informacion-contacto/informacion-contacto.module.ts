import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformacionContactoPageRoutingModule } from './informacion-contacto-routing.module';

import { InformacionContactoPage } from './informacion-contacto.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformacionContactoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [InformacionContactoPage]
})
export class InformacionContactoPageModule {}
