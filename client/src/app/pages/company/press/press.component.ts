import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.scss']
})
export class PressComponent implements OnInit {
  public articles: any = [
    {
      url: 'https://www.americaninno.com/boston/boston-startup/supercomputing-startup-conduit-launches-from-stealth/',
      source: 'AMERICANINNO',
      imageUrl: '/assets/images/press/americaninno.jpg',
      title: 'Supercomputing Startup Conduit Launches from Stealth'
    },
    {
      url: 'https://www.forbes.com/sites/frederickdaso/2017/11/30/meet-the-mit-graduate-working-on-a-cheaper-decentralized-option-to-cloud-computing-and-blockchain/#438091971f64',
      source: 'Forbes',
      imageUrl: '/assets/images/press/forbes2.jpg',
      title: 'Meet The MIT Graduate Working On A Cheaper, Decentralized Option To Cloud Computing and Blockchain'
    },
    {
      url: 'https://www.forbes.com/sites/yiannismouratidis/2018/10/28/be-a-part-of-new-drug-discovery/#6960b8486434',
      source: 'Forbes',
      imageUrl: '/assets/images/press/forbes1.jpg',
      title: 'Be A Part Of New Drug Discovery'
    },
    {
      url: 'https://www.youtube.com/watch?v=g3WQMaDFMIg',
      source: 'Youtube',
      imageUrl: '/assets/images/press/youtube.jpg',
      title: 'Conduit: Providing Unlimited Computing Power to the World'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  public href( url ) {
    window.open( url, '_blank' );
  }

}
