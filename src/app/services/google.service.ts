import { Injectable } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router

declare var gapi: any;  // Declara gapi globalmente

@Injectable({
  providedIn: 'root',
})
export class GoogleAuthService {
  private clientId: string = '721158823687-ntb7mv55qtr4hlf4dsptvun7s5dalctn.apps.googleusercontent.com'; // Tu clientId de la API de Google

  constructor(private router: Router) {} // Inyecta Router

  // Método para cargar la API de Google
  private loadGoogleApi(): Promise<void> {
    return new Promise((resolve, reject) => {
      // Verifica si gapi ya está disponible
      if (typeof gapi === 'undefined') {
        console.error('gapi no está disponible. Intentando cargar...');
        reject('gapi no está disponible');
        return;
      }

      // Asegúrate de que Google API se cargue correctamente
      gapi.load('auth2', () => {
        const auth2 = gapi.auth2.init({
          client_id: this.clientId,
          scope: 'profile email',
          ux_mode: 'redirect',  // Cambia a 'redirect' en lugar de 'popup'
          prompt: 'select_account', // Asegura que se pida la selección de cuenta
        });

        // Verifica si auth2 está correctamente inicializado
        if (auth2) {
          console.log('Google API inicializada correctamente');
          resolve();
        } else {
          console.error('Error al inicializar gapi.auth2');
          reject('Error al inicializar gapi.auth2');
        }
      });
    });
  }

  // Método para iniciar sesión con Google
  async signInWithGoogle(): Promise<any> {
    try {
      // Espera a que la API de Google se haya cargado correctamente
      await this.loadGoogleApi();
      
      // Verifica que gapi.auth2 esté disponible
      const auth2 = gapi.auth2.getAuthInstance();

      if (!auth2) {
        throw new Error('No se pudo obtener una instancia de GoogleAuth');
      }

      // Inicia sesión con Google, forzando la selección de cuenta
      const googleUser = await auth2.signIn();
      console.log('Inicio de sesión exitoso con Google:', googleUser);

      // Obtén el token y el perfil del usuario
      const idToken = googleUser.getAuthResponse().id_token;
      const profile = googleUser.getBasicProfile();
      
      // Guarda el token (opcional) y redirige a la página explorar
      localStorage.setItem('googleIdToken', idToken); // Guarda el token en localStorage
      this.router.navigate(['/explorar']); // Redirige a la página explorar

      return {
        token: idToken,
        user: profile,
      };
    } catch (error: any) {
      console.error('Error al iniciar sesión con Google:', error);
      // Si hay un error, muestra un mensaje
      alert(`Error desconocido al intentar iniciar sesión con Google: ${error.message || error}`);
      throw new Error('Error al intentar iniciar sesión con Google');
    }
  }

  // Método para cerrar sesión
  async signOutWithGoogle(): Promise<void> {
    try {
      const auth2 = gapi.auth2.getAuthInstance();
      await auth2.signOut();
      console.log('Usuario desconectado de Google');
      localStorage.removeItem('googleIdToken'); // Elimina el token al cerrar sesión
    } catch (error) {
      console.error('Error al cerrar sesión con Google:', error);
      throw new Error('Error al cerrar sesión con Google');
    }
  }
}
