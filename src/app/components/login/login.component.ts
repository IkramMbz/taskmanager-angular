import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  login() {
    this.authService
      .signIn(this.email, this.password)
      .then((res) => {
        console.log('Vous êtes connecté:', res);
        // Redirection ou gestion de l'état connecté ici
      })
      .catch((error) => {
        console.error('Erreur de connexion:', error);
      });
  }
}
