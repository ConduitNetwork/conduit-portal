import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  constructor(public global: GlobalService, private router: Router) { }

  ngOnInit() {
    let routeArray = this.router.url.split('/');

    this.global.pageConfig.label    = routeArray[2];
    this.global.pageConfig.routeUrl = `/${routeArray[1]}/${routeArray[2]}`;
  }

}
