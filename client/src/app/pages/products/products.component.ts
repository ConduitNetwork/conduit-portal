import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products: any = [];
  public product:  any;

  constructor(
    private api:    ApiService,
    private router: Router,
    private route:  ActivatedRoute
  ) {}

  ngOnInit() {
    this.api.getLocal( 'products.json' )
    .then( products => {
      this.products = products;

      this.route.params.subscribe( params => {
        if( params.product ) {
          this.getProduct( params.product )
        }
      })
    })
    .catch( err => {
      console.error( 'error loading product data' );
    })
  }

  isActive( param ) {
    return this.router.url.includes( param )
  }

  getProduct( param ) {
    this.product = this.products.find( p => {
      return p.url === param;
    });
  }

}
