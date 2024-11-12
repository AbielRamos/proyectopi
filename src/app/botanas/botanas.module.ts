import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BotanasPageRoutingModule } from './botanas-routing.module';

import { BotanasPage } from './botanas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BotanasPageRoutingModule
  ],
  declarations: [BotanasPage]
})
export class BotanasPageModule {}
