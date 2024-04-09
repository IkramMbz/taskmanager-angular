import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.services';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  signUp() {
    this.authService
      .signUp(this.email, this.password)
      .then(() => {
        console.log('Inscription réussie');
        // Redirection ou gestion de l'UI post-inscription
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
