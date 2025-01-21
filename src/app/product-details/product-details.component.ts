import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/products/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productdata: undefined | product;
  productquantity:number=1;
  constructor(
    private activeRoute: ActivatedRoute,
    private product: ProductService
  ) {}
  ngOnInit(): void {
    let productId = this.activeRoute.snapshot.paramMap.get('productId')
    productId &&
      this.product.getproduct(productId).subscribe((result) => {
        this.productdata = result;
      });
  }
  handlequantity(val:string){
if(this.productquantity<20 && val==='plus'){
  this.productquantity+=1
} else if(
  this.productquantity>1 && val === 'min'
){
  this.productquantity-=1
}
  }
}