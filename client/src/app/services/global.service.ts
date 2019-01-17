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
