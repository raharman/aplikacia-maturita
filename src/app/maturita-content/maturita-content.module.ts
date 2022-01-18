import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaturitaContentPageRoutingModule } from './maturita-content-routing.module';

import { MaturitaContentPage } from './maturita-content.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaturitaContentPageRoutingModule
  ],
  declarations: [MaturitaContentPage],
  entryComponents: [MaturitaContentPage]
})
export class MaturitaContentPageModule {}
