import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaturitaContent2PageRoutingModule } from './maturita-content2-routing.module';

import { MaturitaContent2Page } from './maturita-content2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaturitaContent2PageRoutingModule
  ],
  declarations: [MaturitaContent2Page]
})
export class MaturitaContent2PageModule {}
