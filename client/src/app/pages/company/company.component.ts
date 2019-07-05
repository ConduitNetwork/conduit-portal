import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fade.animation';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
  animations: [ fadeAnimation ]
})
export class CompanyComponent implements OnInit {
  public routes: any = [
    {
      label: 'About',
      path: ['/company/about']
    },
    {
      label: 'Press',
      path: ['/company/press']
    },
    {
      label: 'Careers',
      path: ['/company/careers']
    },
    {
      label: 'Team',
      path: ['/company/team']
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

}
