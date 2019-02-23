import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { GlobalService } from '../../services/global.service';
import { ApiService } from '../../services/api/api.service';
import { Project, Job } from '../../app.interfaces';

export interface Job {
  id: string;
  starttime: string;
  status: string;
}

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
    private api: ApiService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.getProject( this.activeRoute.snapshot.params.id );
  }

  getProject( id ) {
    this.api.get( `projects/${id}` ).then( project => {
      this.project = project;
      this.global.pageConfig.breadcrumbs.push( this.project )

      this.dataAvailable = true;
    })

    this.jobs = [
      {
        id: '87fd73hfdjf93298fj38229393brhkf43',
        starttime: '2 minutes ago',
        status: 'running'
      },
      {
        id: '87fd73hfdjf93298fj38229393brhkf43',
        starttime: '5 minutes ago',
        status: 'finished'
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

}
