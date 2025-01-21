import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/products/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css'],
})
export class SellerUpdateProductComponent implements OnInit {
  Productdata: undefined | product;
  productmessage: undefined | string;
  constructor(
    private route: ActivatedRoute,
    private product: ProductService,
    private routes: Router
  ) {}
  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id');
    productId &&
      this.product.getproduct(productId).subscribe((data) => {
        this.Productdata = data;
      });
  }
  submit(data: product) {
    if (this.Productdata) {
      data.id = this.Productdata.id;
    }
    this.product.updateproduct(data).subscribe((result) => {
      if (result) {
        this.productmessage = 'Update product';
        this.routes.navigate(['/seller-home']);
      }
    });
    setTimeout(() => {
      this.productmessage = undefined;
    }, 3000);
  }
}
