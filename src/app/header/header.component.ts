import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
menutype:string="Default";
sellerName:string='';
  constructor(private route:Router){}

ngOnInit(): void {
  this.route.events.subscribe((val:any)=>{
    if(val.url){
      if(localStorage.getItem('seller') && val.url.includes('seller')){
        console.warn("in seller area")
        this.menutype='seller'
        if(localStorage.getItem('seller')){
          let sellerStore=localStorage.getItem('seller');
          let sellerdata=sellerStore && JSON.parse(sellerStore);
          this.sellerName=sellerdata.name;
        }
      }else{
        console.warn("outside seller")
        this.menutype='Default'
      }
    }

  })
  
}
logout(){
  localStorage.removeItem('seller');
  this.route.navigate(['/'])
}

}
