import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  homepage = 'Home Component';
  username = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.username = this.route.snapshot.params['username'];
  }
}
