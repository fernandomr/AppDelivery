import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SelectProductService{

  baseURL = `http://localhost:3000/api/products?type=marmita&status=1`;

  constructor(private http: HttpClient){}

  getAllProducts(){
    return this.http.get<Product[]>(`${this.baseURL}`);
  }

}
