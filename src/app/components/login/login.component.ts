import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private titleService: Title, 
    private authService: AuthService, 
    private router: Router, 
    private snackBar: MatSnackBar
  ) { }

  login() {
    this.authService
      .signIn(this.email, this.password)
      .then(() => {
        this.router.navigate(['/dashboard']);
      })
      .catch((error) => {
        this.snackBar.open(error, '❌', {
          duration: 3000
        });
      });
  }

  ngOnInit(): void {
    this.titleService.setTitle('TaskSama - Connexion');
  }
}