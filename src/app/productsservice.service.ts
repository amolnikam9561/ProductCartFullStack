import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsserviceService {

  upiUrl ="http://127.0.0.1:8000/api/products/"
  addUrl="http://127.0.0.1:8000/api/products/create/"

  constructor(private http :HttpClient) { }

  getProducts()
  {
    return this.http.get(this.upiUrl)
  }
  addproduct(product:any)
  {
    return this.http.post(this.addUrl,product)
  }
  deleteProduct(id: number) {
    return this.http.delete(`http://your-api-url/products/${id}`);
  }
  
}
