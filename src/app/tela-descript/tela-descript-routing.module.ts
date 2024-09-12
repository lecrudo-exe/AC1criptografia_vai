import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescriptPage } from './tela-descript.page';

const routes: Routes = [
  {
    path: '',
    component: DescriptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaDescriptPageRoutingModule {}
