import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

interface Breadcrumb {
  label:       string;
  id:          string;
  routeUrl:    string;
  description: string;
}

export interface PageConfig {
  label:       string;
  routeUrl:    string;
  breadcrumbs: Array<Breadcrumb>;
}

@Injectable({
  providedIn: 'root'
})

export class GlobalService {
  public languages: any = [
    { name: 'python', label: 'Python' },
    { name: 'go',     label: 'Go Lang' },
    { name: 'ruby',   label: 'Ruby' },
    { name: 'nodejs', label: 'Node.js' }
  ]
  public operatingSystems: any = [
    { name: 'linux',   label: 'Linux' },
    { name: 'windows', label: 'Windows' }
  ]

  private _pageConfig: PageConfig = {
    label:       '',
    routeUrl:    '',
    breadcrumbs: []
  };

  constructor( private router: Router ) { }

  get pageConfig() {
    return this._pageConfig;
  }

  set pageConfig(config) {
    this._pageConfig = config;
  }

  public href( url, blank = false, enabled = true ) {
    if( enabled ) {
      blank ? window.open( url, '_blank' ) : window.open( url );
    }
    else {
      return;
    }
  }

}
