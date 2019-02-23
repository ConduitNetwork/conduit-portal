import { Component, OnInit } from '@angular/core';
import { AuthData } from '../auth.component';
import { ApiService } from '../../services/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.component.scss']
})
export class LoginComponent implements OnInit {
  email:    string = 'user1@email.com';
  password: string = 'password';

  constructor( private api: ApiService, private router: Router ) { }

  ngOnInit() {
  }

  login() {
    this.api.post( 'auth/login', {
      email:    this.email,
      password: this.password
    })
    .then(( data: AuthData ) => {
      localStorage.setItem( 'access_token', data.token );

      this.router.navigate([ '/account' ]);
    })
    .catch(err => {
      console.error( err );
    })
  }

}
