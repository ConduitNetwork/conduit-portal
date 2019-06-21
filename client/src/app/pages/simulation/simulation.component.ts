import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.scss']
})
export class SimulationComponent implements OnInit {
  public nodeCount: number = 8;

  constructor() { }

  ngOnInit() {
  }

  public nodeCountChangeHandler(event) {
    console.log('event')
  }

}
