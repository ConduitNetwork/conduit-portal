import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.component.scss']
})
export class LoginComponent implements OnInit {
  email:    string = '';
  password: string = '';

  constructor() { }

  ngOnInit() {
  }


  submit() {
    alert('hi')
  }

}
