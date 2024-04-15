import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { AuthService } from "./auth.services";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private authService: AuthService, private router: Router) {}

  async canActivate(): Promise<any> {
    try {
      const isAuthenticated = await this.authService.isAuthenticated();
      if (isAuthenticated) {
        this.router.navigateByUrl('/dashboard');
        return true;
      }
    } catch (error) {
      return false;
    }
  }
}
