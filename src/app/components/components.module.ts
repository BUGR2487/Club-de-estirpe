import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { BackButtonComponent } from './back-button/back-button.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [
    BackButtonComponent,
    LogoComponent
  ],
  exports: [
    BackButtonComponent,
    LogoComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
