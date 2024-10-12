import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar esto
import { IonicModule } from '@ionic/angular';
import { LoginPage } from './login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, // Asegúrate de que esto esté aquí
    IonicModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}



