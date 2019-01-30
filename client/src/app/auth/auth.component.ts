import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface AuthData {
  token: string;
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
