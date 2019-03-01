import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../auth.component.scss']
})
export class RegisterComponent implements OnInit {
  email:            string = '';
  password:         string = '';
  confirm_password: string = '';
  error:            string;

  constructor() { }

  ngOnInit() {
  }

  submit() {
    alert('yo')
  }

}
