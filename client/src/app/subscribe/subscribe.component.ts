import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {
  email: string = '';

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  subscribe() {
    if( this.email ) {
      this.api.post( 'users/subscribe', { email: this.email })
      .then(() => {
        this.email = '';
        alert('Subscribed!')
      })
      .catch(err => {
        this.email = '';
        if( err.error.includes( 'is already a list member' )) {
          alert('You are already subscribed :)')
        }
        else {
          alert('We had trouble adding you to the list, please try again later')
        }
      })
    }
  }

}
