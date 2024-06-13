import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/services/authentication.service';
import {AuthenticationRequest} from '../../services/models/authentication-request';
import {TokenService} from '../../services/token/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  authRequest: AuthenticationRequest = {email: '', password: ''};
  errorMsg: Array<string> = [];

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private tokenService: TokenService
  ) {
  }

  login() {
    this.errorMsg = []; // Resetting errorMsg array before making a login attempt
    this.authService.authenticate({ body: this.authRequest }).subscribe({
      next: (res) => {
        this.tokenService.token = res.token as string;
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.log(err);
        if (err.status === 401) {
          this.errorMsg = ['Wrong email or password. Please verify your creditentials !'];
        } else {
          this.errorMsg = ['An error occurred. Please try again later.'];
        }
      }
    });
  }
  
  }

