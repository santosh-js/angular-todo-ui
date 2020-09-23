import { Component, OnInit } from '@angular/core';
import { HardcodedAuthServiceService } from '../service/authService/hardcoded-auth-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  constructor(
    private hardcodedAuthServiceService: HardcodedAuthServiceService
  ) {}

  ngOnInit(): void {
    this.hardcodedAuthServiceService.logout();
  }
}
