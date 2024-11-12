import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlimentosInstantaneosPageRoutingModule } from './alimentos-instantaneos-routing.module';

import { AlimentosInstantaneosPage } from './alimentos-instantaneos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlimentosInstantaneosPageRoutingModule
  ],
  declarations: [AlimentosInstantaneosPage]
})
export class AlimentosInstantaneosPageModule {}
