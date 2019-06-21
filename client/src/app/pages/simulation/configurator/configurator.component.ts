import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.scss']
})
export class ConfiguratorComponent implements OnInit {
  public nodeCount: number = 0;

  @Output() nodeCountChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  changeNodeCount( count ) {
    this.nodeCountChange.emit( count )
  }

}
