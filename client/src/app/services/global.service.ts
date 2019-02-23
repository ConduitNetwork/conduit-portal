import { Injectable } from '@angular/core';

interface Breadcrumb {
  label:    string;
  routeUrl: string;
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

  constructor() { }

  get pageConfig() {
    return this._pageConfig;
  }

  set pageConfig(config) {
    this._pageConfig = config;
  }

}
