import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnlatadosPageRoutingModule } from './enlatados-routing.module';

import { EnlatadosPage } from './enlatados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnlatadosPageRoutingModule
  ],
  declarations: [EnlatadosPage]
})
export class EnlatadosPageModule {}
