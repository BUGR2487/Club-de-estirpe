import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NetworkingPageRoutingModule } from './networking-routing.module';

import { NetworkingPage } from './networking.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NetworkingPageRoutingModule,
    ComponentsModule
  ],
  declarations: [NetworkingPage]
})
export class NetworkingPageModule {}
