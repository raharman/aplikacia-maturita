import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaturitaContent2Page } from './maturita-content2.page';

const routes: Routes = [
  {
    path: '',
    component: MaturitaContent2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaturitaContent2PageRoutingModule {}
