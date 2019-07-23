import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { GlobalService } from '../../services/global.service';
import { ApiService } from '../../services/api/api.service';
import { Project, Job } from '../../app.interfaces';
import { ProjectService } from '../../services/project/project.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  public dataAvailable: boolean = false;

  public project: Project;
  public config:  any = {};
  public jobs: Array<Job>;

  constructor(
    public global: GlobalService,
    private projectService: ProjectService,
    private api: ApiService,
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

      this.config.script = 'iris.py',
      this.config.data   = 'iris.csv'

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


  // runJob() {
  //   this.api.post('/api/jobs', {
  //   	"job": {
  //   		"language": "python",
  //   		"script": "iris.py",
  //   		"data": "iris.csv"
  //   	}
  //   })
  //   .then(resp => {
  //     console.log(resp)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // }

  runJob() {
    this.router.navigate([`/account/projects/${this.project.uuid}/jobs/1563891000849`])
  }

}
