import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QueEsClubEstirpePageRoutingModule } from './que-es-club-estirpe-routing.module';

import { QueEsClubEstirpePage } from './que-es-club-estirpe.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QueEsClubEstirpePageRoutingModule,
    ComponentsModule
  ],
  declarations: [QueEsClubEstirpePage]
})
export class QueEsClubEstirpePageModule {}
