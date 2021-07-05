import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { Products } from '../models/products.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  products: Products;
  ValorTotal = 0;


  constructor() {
    this.products = new Products();
    this.products.productsLst = Array<Product>();
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.ValorTotal = parseInt(localStorage.getItem('valorTotal'));
  }

  getProductsLst() {

  }

  addItem() {
    this.products.amount += 1;
  }

  removeItem() {
    if (this.products.amount == 0) {
      console.log("error")
    }
    else {
      this.products.amount -= 1;

    }
  }
}
