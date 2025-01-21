import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/products/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  popularproduct:undefined|product[];
  trendyprocut:undefined|product[];
  
  constructor(private products:ProductService){}

  ngOnInit(): void {
    this.products.popularproduct().subscribe((data)=>{
this.popularproduct=data;
    });
    this.products.trendyproduct().subscribe((data)=>{
      this.trendyprocut=data;
    })

    
  }
 
  

}
