import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../models/product.model';
import { SelectProductService } from '../service/product/select-product.service';

@Component({
  selector: 'app-select-product',
  templateUrl: './select-product.page.html',
  styleUrls: ['./select-product.page.scss'],
})
export class SelectProductPage implements OnInit {
  productLst: Product[];
  routeFlag: string = '';
  typeFlag: string = '';
  ValorTotal = 0;
  productSpecific = [
    {
      "id": 0,
      "name": "",
      "price": 0,
      "type": "",
      "size": "",
      "description": "",
      "image": ""
    }
  ];

  constructor(
    private selectProductSvc: SelectProductService,
    public router: Router,
    public actRoute: ActivatedRoute
  ) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.routeFlag = this.actRoute.snapshot.paramMap.get("sizeid")
    this.typeFlag = this.actRoute.snapshot.paramMap.get("product-sel")

    this.getAllProducts(this.routeFlag, this.typeFlag)
    this.getValorTotal();
  }

  getAllProducts(size, type) {
    if (type == 'marmita') {
      this.selectProductSvc.getAllProductsMarmita().subscribe(
        result => {

          this.productLst = result

          //this.cleanArray();

          var i = 0
          this.productLst.forEach(p => {
            if (this.productLst[i].size == size && this.productLst[i].type == type) {
              console.log(size, type, this.productLst[i].size, this.productLst[i].type)
              this.productSpecific[i] = this.productLst[i]
              console.log(this.productSpecific[i])
            }
            i++
          })

        },
        err => {
          console.log('Não foi possivel pegar a lista de produtos')
        });
    }
    else if (type == 'bebida') {
      this.selectProductSvc.getAllProductsBebida().subscribe(
        result => {

          this.productLst = result

          //this.cleanArray();

          var i = 0
          this.productLst.forEach(p => {
            if (this.productLst[i].size == size && this.productLst[i].type == type) {
              console.log(size, type, this.productLst[i].size, this.productLst[i].type)
              this.productSpecific[i] = this.productLst[i]
              console.log(this.productSpecific[i])
            }
            i++
          })

        },
        err => {
          console.log('Não foi possivel pegar a lista de produtos')
        });
    }

  }

  /*
  cleanArray() {
    this.productSpecific = []
  }*/

  getValorTotal() {

  }

}
