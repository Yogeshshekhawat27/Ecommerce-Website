import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { login, signup } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SellService {
  isSellerloggedIn = new BehaviorSubject<boolean>(false);
  isLoginerror = new EventEmitter<Boolean>(false);

  constructor(private http: HttpClient, private router: Router) {}

  userSignUp(data: signup) {
    return this.http.post('http://localhost:3000/seller', data, { observe: 'response' }).subscribe((result) => {
        console.warn(result);
        if (result) {
          this.isSellerloggedIn.next(true);
          localStorage.setItem('seller', JSON.stringify(result.body));
          this.router.navigate(['/seller-home']);
        }
      });
  }  


  reloadseller() {
    if (localStorage.getItem('seller')) {
      this.isSellerloggedIn.next(true);
      this.router.navigate(['/seller-home']);
    }
  }


  userlogin(data:login){
    console.warn(data)
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,{observe:'response'})
    .subscribe((result:any)=>{
      console.warn(result)
      if(result&& result.body && result.body.lenght){
        alert("Welcome")
        localStorage.setItem('seller',JSON.stringify(result.body))
        this.router.navigate(['seller-home'])
      }else{
        alert("Get Lost")
        this.isLoginerror.emit(true);
      }
    })
  }
}
