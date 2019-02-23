import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { GlobalService } from '../../services/global.service';
import { ApiService } from '../../services/api/api.service';
import { Project, Job } from '../../app.interfaces';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  public dataAvailable: boolean = false;

  public project: Project;
  public job:     Job;

  constructor(
    private global: GlobalService,
    private api: ApiService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    // check if project data is available right here, then set this.project if so
  }

  ngOnInit() {
    this.getJob( !!this.project );
  }

  getJob( project, id = this.activeRoute.snapshot.params.id ) {
    if( project ) {
      this.api.get( `jobs/${id}` ).then( job => {
        this.job = job;

        this.global.pageConfig.breadcrumbs.push( this.job )

        this.dataAvailable = true;

      }).catch( err => {
        this.router.navigate(['/account/projects'])
      })
    }
    else {
      this.api.get( `projects/${id}` ).then( project => {
        this.project = project;

        this.getJob( true )
      })
      .catch( err => {
        this.router.navigate(['/account/projects'])
      })
    }
  }

}
