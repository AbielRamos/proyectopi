import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LegumbresPageRoutingModule } from './legumbres-routing.module';

import { LegumbresPage } from './legumbres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LegumbresPageRoutingModule
  ],
  declarations: [LegumbresPage]
})
export class LegumbresPageModule {}
