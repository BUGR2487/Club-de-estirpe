import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { BackButtonComponent } from './back-button/back-button.component';
import { LogoComponent } from './logo/logo.component';
import { ContactanosComponent } from './contactanos/contactanos.component';

@NgModule({
  declarations: [
    BackButtonComponent,
    LogoComponent,
    ContactanosComponent
  ],
  exports: [
    BackButtonComponent,
    LogoComponent,
    ContactanosComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
