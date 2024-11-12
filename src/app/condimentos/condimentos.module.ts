import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CondimentosPageRoutingModule } from './condimentos-routing.module';

import { CondimentosPage } from './condimentos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CondimentosPageRoutingModule
  ],
  declarations: [CondimentosPage]
})
export class CondimentosPageModule {}
