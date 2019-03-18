import { Component, OnInit } from '@angular/core';

declare var particlesJS: any;

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit {
  email: string;

  constructor() { }

  ngOnInit() {
    particlesJS.load('particles', '/assets/data/particlesjs-config.json', null);
  }

  subscribe() {
    alert('Try again later')
  }

}
