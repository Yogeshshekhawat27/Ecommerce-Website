import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/products/product.service';
import{faTrash,faEdit}from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
  productlist:undefined|product[]
  productMessage:string|undefined;
  icon=faTrash;
  edit=faEdit;

  constructor(private products:ProductService){}
ngOnInit(): void {
  this.list(); 
  
}


deleteproduct(id:number){
  console.log("test id",id)
  this.products.deleteproduct(id).subscribe((result)=>{
if(result){
  this.productMessage="Product is Deleted"
  this.list();
} 
  })
  setTimeout(()=>{
this.productMessage=undefined;
  },3000)
}


list(){
  this.products.productlist().subscribe((result)=>{
    console.log(result);        
    if(result){
      this.productlist=result;
    }
  })
}
}
