import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { GlobalService } from '../../services/global.service';
import { ApiService } from '../../services/api/api.service';
import { ProjectService } from '../../services/project/project.service';
import { Project, Job } from '../../app.interfaces';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {
  public dataAvailable: boolean = false;

  public project: Project;
  public job:     Job;
  public jobId;
  public id;
  public running: boolean = true;

  constructor(
    private global: GlobalService,
    private projectService: ProjectService,
    private api: ApiService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.jobId = activeRoute.snapshot.params.jobId;
    this.id    = activeRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.getJob( !!this.project );
  }

  getJob( project ) {
    if( project ) {
      this.api.get( `jobs/${this.jobId}` ).then(( job: Job ) => {
        this.job = job;

        this.global.pageConfig.breadcrumbs.push( this.job.breadcrumb );

        console.log(this.global.pageConfig.breadcrumbs)

        this.dataAvailable = true;

        setTimeout(() => {
          this.running = false
        }, 12000)
      }).catch( err => {
        this.router.navigate(['/account/projects']);
      })
    }
    else {
      this.projectService.getProject( this.id ).then( project => {
        this.project = project;

        this.global.pageConfig.breadcrumbs.push({
          label: 'jobs',
          routeUrl: `projects/${project.uuid}/jobs`
        })

        this.getJob( true );
      })
    }
  }

}
