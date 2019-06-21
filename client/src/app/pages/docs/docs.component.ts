import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { GlobalService } from '../../services/global.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit {
  public products: any = [];

  constructor(
    private api:    ApiService,
    private router: Router,
    private route:  ActivatedRoute,
    public global: GlobalService
  ) {}

  ngOnInit() {
    this.api.getLocal( 'products.json' )
    .then( products => {
      this.products = products;
    })
    .catch( err => {
      console.error( 'error loading documentation data' );
    })
  }

}
