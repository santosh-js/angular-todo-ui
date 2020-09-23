import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthServiceService } from '../service/authService/hardcoded-auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = 'santoshjs';
  password = 'password';
  invalid = false;
  error = 'Invalid credentials !';

  constructor(
    private route: Router,
    private hardcodedAuthService: HardcodedAuthServiceService
  ) {}

  ngOnInit(): void {}

  handleLogin() {
    // if (this.username === 'santoshjs' && this.password === 'password') {
    if (this.hardcodedAuthService.authenticate(this.username, this.password)) {
      this.route.navigate(['home', this.username]);
    } else {
      this.invalid = true;
    }
  }
}
