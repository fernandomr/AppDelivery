import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonCheckbox } from '@ionic/angular';
import { Pedido } from '../models/pedido.model';

import { Product } from '../models/product.model';
import { SelectProductService } from '../service/product/select-product.service';
import transformProductImageUrl from '../utils/transformImageUrl';

@Component({
  selector: 'app-select-product',
  templateUrl: './select-product.page.html',
  styleUrls: ['./select-product.page.scss'],
})
export class SelectProductPage implements OnInit {
  productLst: Product[];
  pedidoLst: Pedido[];
  routeFlag = '';
  typeFlag = '';
  ValorTotal = 0;
  checkFood: boolean;
  productSpecific = [
    {
      id: 0,
      name: '',
      price: 0,
      type: '',
      size: '',
      description: '',
      image: ''
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
    this.routeFlag = this.actRoute.snapshot.paramMap.get('sizeid');
    this.typeFlag = this.actRoute.snapshot.paramMap.get('product-sel');

    this.getAllProducts(this.routeFlag, this.typeFlag);

    this.ValorTotal = 0;
  }

  transformImageUrl(imageUrl: string): string {
    return transformProductImageUrl(imageUrl);
  }

  getAllProducts(size: string, type: string) {
    if (type === 'marmita') {
      this.selectProductSvc.getAllProductsMarmita(size).subscribe(
        result => {
          this.productLst = result;
        },
        err => {
          console.log('Não foi possivel pegar a lista de produtos');
        });
    }
    else if (type === 'bebidas') {
      this.selectProductSvc.getAllProductsBebida().subscribe(
        result => {
          this.productLst = result;
        },
        err => {
          console.log('Não foi possivel pegar a lista de produtos');
        });
    }
  }

  getAddToCart() {

  }

  goToCart() {

  }

}
