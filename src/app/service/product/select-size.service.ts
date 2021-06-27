import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product.model';

@Injectable({
    providedIn: 'root'
})

export class SelectSizeService {
    baseURL = `http://localhost:3000/api/products/perSize/teste`;

    constructor(private http: HttpClient) { }

    getAllSize() {
        return this.http.get<Product[]>(`${this.baseURL}`);
    }

}
