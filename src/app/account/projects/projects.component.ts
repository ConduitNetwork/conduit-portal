import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  newProject: any;

  languages: any = [
    {
      name: 'python',
      label: 'Python'
    },
    {
      name: 'go',
      label: 'Go Lang'
    },
    {
      name: 'ruby',
      label: 'Ruby'
    },
    {
      name: 'nodejs',
      label: 'Node.js'
    }
  ]
  projects: any = [];

  constructor(
    private modalService: NgbModal,
    private global: GlobalService
  ) { }

  ngOnInit() {
  }

  createProject( content ) {
    // clear newProject values
    this.newProject = {};
    this.modalService.open(content, {
      keyboard: false,
      backdrop: 'static',
      centered: true,
      beforeDismiss: () => {
        return confirm('Are you sure you want to close without saving this?');
      }
    }).result.then( saved => {
      this.projects.push({
        name: "TensorFlow Example",
        description: "A basic demo of how to run TensorFlow code"
      })
      console.log(this.newProject)
    }, ( closed ) => {

    });
  }

  formValid() {
    return true
  }

}
