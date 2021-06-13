import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  marked: boolean = true;

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  constructor(private authService : AuthService,private router:Router) {  }

    ngOnInit(): void {
      if(this.authService){}
    }
    loggedin(value:any):void{
      this.authService.loggedin(value.username,value.password)
    }
  }










