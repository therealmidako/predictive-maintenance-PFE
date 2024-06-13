import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './pages/login/login.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpTokenInterceptor} from './services/interceptor/http-token.interceptor';
import { HomeComponent } from './pages/home/home.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbarModule}from '@angular/material/toolbar';
import { NavbarComponent } from './navbar/navbar.component';
import{MatButtonModule} from '@angular/material/button';
import { provideCharts, withDefaultRegisterables,BaseChartDirective } from 'ng2-charts';

import { PredictionsComponent } from './pages/predictions/predictions.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PredictionsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        MatToolbarModule,
        MatButtonModule,
        NavbarComponent,
        RouterModule
       
        
    ],
  providers: [
    HttpClient,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpTokenInterceptor,
      multi: true
    },
    provideAnimationsAsync(),
    provideCharts(withDefaultRegisterables()),
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
