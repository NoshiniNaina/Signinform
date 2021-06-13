import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }
  loggedin(username:string,password:string){
    if(username=='admin' && password=="admin"){
      this.router.navigate(['./admin']);
    }

  }
}
