import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product.model';
import { SelectProductService } from '../service/select-product/select-product.service';

@Component({
  selector: 'app-select-product',
  templateUrl: './select-product.page.html',
  styleUrls: ['./select-product.page.scss'],
})
export class SelectProductPage implements OnInit {
  productLst: Product[];
  type = 'marmita';

  constructor(
    private selectProductSvc: SelectProductService
  ) {}

  ngOnInit() {
    this.getAllProducts();
  }
  
  getAllProducts(){
    this.selectProductSvc.getAllProducts().subscribe(
      result => {
        this.productLst = result;
        console.log(result)
      },
      err => {
        console.log('Não foi possivel pegar a lista de produtos')
      });
  }

}
