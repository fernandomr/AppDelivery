import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SelectProductService {
  baseURLMarmita = `http://localhost:3000/api/products?type=marmita&status=1&size=`
  baseURLBebida = `http://localhost:3000/api/products?type=bebida&status=1`

  constructor(private http: HttpClient) { }

  getAllProductsMarmita(size) {
    return this.http.get<Product[]>(`${this.baseURLMarmita}${size}`);
  }

  getAllProductsBebida() {
    return this.http.get<Product[]>(`${this.baseURLBebida}`);
  }

}
