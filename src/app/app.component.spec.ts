import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  rootPage: any = 'LoginPage';

  constructor(private router: Router, private platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Aquí puedes añadir cualquier inicialización adicional que necesites
    });
  }

  shouldShowMenu(): boolean {
    const currentRoute = this.router.url;
    return currentRoute !== '/login'; 
  }
}

