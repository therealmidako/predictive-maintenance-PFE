import { Component } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TokenService } from '../services/token/token.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(
    private tokenService: TokenService
  ) {
  }

  get userName(): string {
    return this.tokenService.userFullname;
  }

  logout() {
    localStorage.removeItem('token');
    window.location.reload();
  }

}
