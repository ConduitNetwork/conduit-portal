import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { GlobalService } from '../../services/global.service';
import { ApiService } from '../../services/api/api.service';
import { ProjectService } from '../../services/project/project.service';
import { Project, Job } from '../../app.interfaces';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  public dataAvailable: boolean = false;

  public project: Project;
  public config:  any = {};
  public jobs: Array<Job>;

  public breadcrumb: any = {
    description: "A basic demo of how to run TensorFlow code",
    label: "jobs",
    routeUrl: "/account/projects/123/jobs"
  }

  constructor(
    public global: GlobalService,
    private api: ApiService,
    private projectService: ProjectService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.getProject( this.activeRoute.snapshot.params.id );
  }

  getProject( id ) {
    this.projectService.getProject( id ).then( project => {
      this.project = project;

      this.global.pageConfig.breadcrumbs.push({
        label: 'jobs',
        routeUrl: `projects/${project.uuid}/jobs`
      })

      this.dataAvailable = true;
    })

    this.jobs = [
      {
        uuid:  '12345j',
        starttime:   Date.now(),
        breadcrumb: {
          label:       '12345j',
          routeUrl:    'jobs/12345j',
          description: `job 12345j`
        },
        config: {
          managerScriptPath: '',
          workerScriptPath: '',
          computeResources: "1,5120,5120" // Comma seperated string for CPU Cores, RAM(MB), & HDD(MB), Ex: "1,5120,5120"
        },
        status: {
          duration: 0,
          activeWorkers: 2,
          tasksComplete: ""
        },
        variables: [
          {
            key: "SOME_VAR",
            value: "the_value_of_some_var"
          }
        ]
      },
      {
        uuid:  '12345j',
        starttime:   Date.now(),
        breadcrumb: {
          label:       '12345j',
          routeUrl:    'jobs/12345j',
          description: `job 12345j`
        },
        config: {
          managerScriptPath: '',
          workerScriptPath: '',
          computeResources: "1,5120,5120" // Comma seperated string for CPU Cores, RAM(MB), & HDD(MB), Ex: "1,5120,5120"
        },
        status: {
          duration: 0,
          activeWorkers: 2,
          tasksComplete: ""
        },
        variables: [
          {
            key: "SOME_VAR",
            value: "the_value_of_some_var"
          }
        ]
      }
    ]
  }

  accordionToggle( event, acc ) {
    console.log(event)
    console.log(acc.isExpanded(event.panelId))
  }


  // onSort({column, direction}) {
  //
  //   // resetting other headers
  //   this.headers.forEach(header => {
  //    if (header.sortable !== column) {
  //      header.direction = '';
  //    }
  //   });
  //
  //   this.service.sortColumn = column;
  //   this.service.sortDirection = direction;
  // }


  runJob() {
    console.log(this.project)
    this.router.navigate([`/account/projects/${this.project.uuid}/jobs/${Date.now()}`])
  }

}
