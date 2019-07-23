import { Injectable } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { ApiService } from '../../services/api/api.service';
import { Project, Job } from '../../app.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private api: ApiService,
    private global: GlobalService
  ) { }

  getProject( id ) {
    return this.api.get( `projects/${id}` ).then(( project: Project ) => {
      project.label      = project.name.trim().replace(/ /g, '-').toLowerCase()
      project.breadcrumb = {
        label:       project.label,
        id:          project.uuid,
        routeUrl:    `projects/${project.uuid}`,
        description: "A basic demo of how to run TensorFlow code"
      }

      this.global.pageConfig.breadcrumbs = [ project.breadcrumb ]

      return project
    })
    .catch( error => { return error })
  }
}
