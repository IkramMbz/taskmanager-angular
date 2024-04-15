import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth.services';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  email: string = '';
  password: string = '';

  constructor(
    private titleService: Title, 
    private authService: AuthService, 
    private router: Router, 
    private snackBar: MatSnackBar
  ) {}

  signup() {
    this.authService
      .signUp(this.email, this.password)
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
    this.titleService.setTitle('TaskSama - Inscription');
  }
}