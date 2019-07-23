import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { GlobalService } from '../../services/global.service';
import { ApiService } from '../../services/api/api.service';
import { Project, Job } from '../../app.interfaces';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projectFilter: any = {};
  newProject: any = {};
  projects: any = [];

  dataAvailable: boolean = false;

  constructor(
    private modalService: NgbModal,
    private api: ApiService,
    public global: GlobalService
  ) { }

  ngOnInit() {
    this.global.pageConfig.breadcrumbs = [];

    this.getProjects()
  }

  getProjects() {
    this.api.get( `projects` ).then(( projects: Project[] ) => {
      this.projects = projects;

      this.dataAvailable = true;
    })
  }

  createProject( content ) {
    // clear newProject values
    this.newProject = {
      name: "TensorFlow Example",
      description: "A basic demo of how to run TensorFlow code"
    };
    this.modalService.open( content, {
      keyboard: false,
      backdrop: 'static',
      centered: true,
      beforeDismiss: () => {
        return confirm('Are you sure you want to close without saving this?');
      }
    }).result.then( saved => {
      this.projects.push( this.newProject )

      console.log( this.newProject )
    }, ( closed ) => {

    });
  }

  formValid() {
    return true
  }

}
