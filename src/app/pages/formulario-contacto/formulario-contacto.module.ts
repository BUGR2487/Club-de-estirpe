import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioContactoPageRoutingModule } from './formulario-contacto-routing.module';

import { FormularioContactoPage } from './formulario-contacto.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioContactoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FormularioContactoPage]
})
export class FormularioContactoPageModule {}
