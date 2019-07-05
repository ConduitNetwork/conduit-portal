import { Component } from '@angular/core';
import { NgSelectConfig } from '@ng-select/ng-select';
import { fadeAnimation } from './animations/fade.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ fadeAnimation ]
})
export class AppComponent {
  title = 'conduit-portal';

  constructor(private ngSelectConfig: NgSelectConfig) {
    this.ngSelectConfig.notFoundText = 'Custom not found';
  }

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
