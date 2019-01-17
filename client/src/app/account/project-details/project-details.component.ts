import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  project: any;

  constructor(
    private global: GlobalService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.getProject(this.activeRoute.snapshot.params.id);
  }

  getProject(id) {
    this.project = {
      label:       "TensorFlow Example".trim().replace(' ', '-').toLowerCase(),
      routeUrl:    this.router.url,
      description: "A basic demo of how to run TensorFlow code"
    }
    this.global.pageConfig.breadcrumbs.push(this.project)
  }

}
