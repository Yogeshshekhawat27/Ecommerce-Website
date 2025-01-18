import { Component,OnInit } from '@angular/core';
import { SellService } from '../services/sell.service';
import { signup } from '../data-type';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  showLogin = false;
  authError:string = '';
constructor( private seller:SellService , private router:Router ){}
 ngOnInit():void{
  this.seller.reloadseller()
 }
  
 signup(data:signup):void{
  console.warn(data)
  this.seller.userSignUp(data)
 }


 login(data:signup):void{
  this.authError='';
  this.seller.userlogin(data);
  this.seller.isLoginerror.subscribe((isError)=>{
    if(isError){
      this.authError= "Email or Passsword is not Correct "
    }
  })
  
 }
  
 openlogin(){
  this.showLogin=true
 }
 
 opensignup(){
  this.showLogin=false
 }
}
