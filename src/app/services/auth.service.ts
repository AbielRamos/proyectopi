import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private validUsers = [
    { username: 'abiel', password: '123456' },
    { username: 'manuel', password: '123456' },
    { username: 'valentin', password: '123456' },
    { username: 'majo', password: '123456' }
  ];

  constructor(private router: Router) {}

  login(username: string, password: string): Observable<boolean> {
    if (username.trim() === '' || password.trim() === '') {
      return of(false);
    }

    const user = this.validUsers.find(user => user.username === username && user.password === password);
    if (user) {
      localStorage.setItem('loggedIn', 'true');
      return of(true);
    } else {
      return of(false);
    }
  }

  loginWithGoogle(): Observable<boolean> {
    // Lógica de autenticación con Google
    localStorage.setItem('loggedIn', 'true');
    return of(true);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('loggedIn') === 'true';
  }

  logout() {
    localStorage.removeItem('loggedIn');
    this.router.navigate(['/login']);
  }
}


