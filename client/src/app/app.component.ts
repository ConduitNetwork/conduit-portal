import { Component } from '@angular/core';
import { NgSelectConfig } from '@ng-select/ng-select';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'conduit-portal';

  constructor(private ngSelectConfig: NgSelectConfig) {
    this.ngSelectConfig.notFoundText = 'Custom not found';
  }
}