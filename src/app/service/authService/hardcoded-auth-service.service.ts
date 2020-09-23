import { Injectable } from '@angular/core';

const SESSION_USER = 'authenticatedUser';

@Injectable({
  providedIn: 'root',
})
export class HardcodedAuthServiceService {
  constructor() {}

  authenticate(username, password) {
    if (username === 'santoshjs' && password === 'password') {
      sessionStorage.setItem(SESSION_USER, username);
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    return Boolean(sessionStorage.getItem(SESSION_USER));
  }

  logout() {
    sessionStorage.removeItem(SESSION_USER);
  }
}
