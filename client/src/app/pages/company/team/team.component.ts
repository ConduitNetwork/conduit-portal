import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  public team: any = [];

  constructor( private api: ApiService ) { }

  ngOnInit() {
    this.api.getLocal( 'team.json' )
    .then( team => {
      this.team = team;
    })
    .catch( err => {
      console.error( 'error loading team data' );
    })
  }

}
