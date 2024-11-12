import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LacteosPageRoutingModule } from './lacteos-routing.module';

import { LacteosPage } from './lacteos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LacteosPageRoutingModule
  ],
  declarations: [LacteosPage]
})
export class LacteosPageModule {}
