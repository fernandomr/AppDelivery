import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  goToSelectProduct(){
    this.router.navigateByUrl('select-product');
  }

}
