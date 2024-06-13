import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {authGuard} from './services/guard/auth.guard';
import {HomeComponent} from "./pages/home/home.component";
import { PredictionsComponent } from './pages/predictions/predictions.component';

const routes: Routes = [
  { 
    path: '',
    component: LoginComponent
  },
  { 
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard]
  },
  {
    path: 'predictions',
    component: PredictionsComponent,
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
