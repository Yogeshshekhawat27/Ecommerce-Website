import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from 'src/app/data-type';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  addproduct(data: product) {
    return this.http.post('http://localhost:3000/product', data);
  }

  productlist() {
    return this.http.get<product[]>('http://localhost:3000/product');
  }

  deleteproduct(id:number){
    return this.http.delete(`http://localhost:3000/product/${id}`);
  }
// update api
  getproduct(id:string){
    return this.http.get<product>(`http://localhost:3000/product/${id}`);

  }
  updateproduct(product:product){
    return this.http.put<product>(`http://localhost:3000/product/${product.id}`,product);


  }

  popularproduct(){
    return this.http.get<product[]>('http://localhost:3000/product?_limit=4')
  }

  trendyproduct(){
    return this.http.get<product[]>('http://localhost:3000/product?_limit=8')
  }
 
  searchProducts(query:string){
    return this.http.get<product[]>(`http://localhost:3000/product?q=${query}`) 
  }


}
 