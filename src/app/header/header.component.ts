import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/products/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
menutype:string="Default";
sellerName:string='';
searchResult:undefined|product[];
  constructor(private route:Router,private product:ProductService){}

ngOnInit(): void {
  this.route.events.subscribe((val:any)=>{
    if(val.url){
      if(localStorage.getItem('seller') && val.url.includes('seller')){
        
        this.menutype='seller'
        if(localStorage.getItem('seller')){
          let sellerStore=localStorage.getItem('seller');
          let sellerdata=sellerStore && JSON.parse(sellerStore);
          this.sellerName=sellerdata.name;
        }
      }else{
        
        this.menutype='Default'
      }
    }

  })
  
}
logout(){
  localStorage.removeItem('seller');
  this.route.navigate(['/'])
}
redirecttodetails(id:number){
  this.route.navigate(['/details/'+id])
}

searchProduct(query:KeyboardEvent){
if(query){
  const element=query.target as HTMLInputElement;
  this.product.searchProducts(element.value).subscribe((result)=>{
    if(result.length>5){
result.length=5;
    }
this.searchResult=result;
  })
}
}
hidesearch(){
  this.searchResult=undefined;
}
submitsearch(val:string){
  this.route.navigate([`search/${val}`])

}

}
