import { Component, OnInit } from '@angular/core';
import { HardcodedAuthServiceService } from '../service/authService/hardcoded-auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(public hardcodedAuthService: HardcodedAuthServiceService) {}

  ngOnInit(): void {}
}
