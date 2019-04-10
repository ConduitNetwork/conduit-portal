import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
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

}
