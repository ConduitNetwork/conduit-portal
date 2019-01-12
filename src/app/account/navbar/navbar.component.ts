import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'account-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class AccountNavbarComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
