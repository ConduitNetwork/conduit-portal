import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';

declare var particlesJS: any;

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit {

  constructor(public global: GlobalService) { }

  ngOnInit() {
    particlesJS.load('particles', '/assets/data/particlesjs-config.json', null);
  }

}
