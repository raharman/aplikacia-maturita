import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaturitaContentPage } from './maturita-content.page';

const routes: Routes = [
  {
    path: '',
    component: MaturitaContentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaturitaContentPageRoutingModule {}
