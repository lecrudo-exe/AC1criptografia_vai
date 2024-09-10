import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaDescriptPage } from './tela-descript.page';

const routes: Routes = [
  {
    path: '',
    component: TelaDescriptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaDescriptPageRoutingModule {}
