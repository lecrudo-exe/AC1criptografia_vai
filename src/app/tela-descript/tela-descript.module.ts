import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TelaDescriptPageRoutingModule } from './tela-descript-routing.module';
import { DescriptPage } from './tela-descript.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaDescriptPageRoutingModule
  ],
  declarations: [DescriptPage]
})
export class TelaDescriptPageModule {}

