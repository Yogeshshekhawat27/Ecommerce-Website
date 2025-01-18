import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/products/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-seller-product-list',
  templateUrl: './seller-product-list.component.html',
  styleUrls: ['./seller-product-list.component.css']
})
export class SellerProductListComponent implements OnInit {
  addproductmessage:string|undefined;
  constructor(private product:ProductService){}
ngOnInit(): void {
  
}
submit(data:product){
    this.product.addproduct(data).subscribe((result)=>{
      console.log(result);
            if(result){
        this.addproductmessage='PRODUCT IS SUECCESSFULLY ADDED'
      }
      setTimeout(()=>(this.addproductmessage = undefined),3000);
    })
}
}
