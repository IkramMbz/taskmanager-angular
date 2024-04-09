import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private angularFireAuth: AngularFireAuth) {}

  public async isAuthenticated(): Promise<boolean> {
    const user = this.angularFireAuth.currentUser;
    return !!user;
  }

  // Inscription
  async signUp(email: string, password: string) {
    await this.angularFireAuth.createUserWithEmailAndPassword(email, password);
  }

  // Connexion
  async signIn(email: string, password: string) {
    await this.angularFireAuth.signInWithEmailAndPassword(email, password);
  }

  // Déconnexion
  async signOut() {
    await this.angularFireAuth.signOut();
  }

  // Obtenir l'état d'authentification de l'utilisateur
  getUser() {
    return this.angularFireAuth.authState;
  }
}
