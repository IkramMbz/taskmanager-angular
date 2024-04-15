import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private angularFireAuth: AngularFireAuth) {}

  public async isAuthenticated(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.angularFireAuth.authState.subscribe(user => {
        if (user && user.email) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }

  async signUp(email: string, password: string) {
    await this.angularFireAuth.createUserWithEmailAndPassword(email, password);
  }

  async signIn(email: string, password: string) {
    await this.angularFireAuth.signInWithEmailAndPassword(email, password);
  }

  async signOut() {
    await this.angularFireAuth.signOut();
    window.location.href = '/login';
  }

  getUser() {
    return this.angularFireAuth.authState;
  }
}
