import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/products/product.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
  productlist:undefined|product[]
  constructor(private products:ProductService){}
ngOnInit(): void {
  this.products.productlist().subscribe((result)=>{
    console.log(result);
    this.productlist=result;
  })
  
}
}
