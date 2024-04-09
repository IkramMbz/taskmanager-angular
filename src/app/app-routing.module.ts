import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { TaskComponent } from './components/task/task.component';

// Définition des routes
const routes: Routes = [
  { path: '', component: LoginComponent }, // Route par défaut
  { path: 'login', component: LoginComponent }, // Route pour la connexion
  { path: 'signup', component: SignupComponent }, // Route pour l'inscription
  { path: 'task', component: TaskComponent }, // Route pour l'inscription
  { path: '**', redirectTo: '' }, // Redirection vers la page d'accueil pour les chemins non définis
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
