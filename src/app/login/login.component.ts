import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { TokenParams } from '../classes/tokenparams';
import { AuthService } from './authservice';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http/http';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

    username: string;
    password: string;
    isLoginError:boolean=false;
    
    tokenParams: TokenParams;

    constructor(
        private route:Router,
        private _authService: AuthService){

    }
    ngOnInit() {

        GotoLogin: { }
    }

    doLogin(userName,password){
        this._authService.getToken(userName,password).subscribe((data : any)=>{
         localStorage.setItem('userToken',data.access_token);
         this.route.navigate(['/employee']);
       },
       (err : HttpErrorResponse)=>{
         this.isLoginError = true;
       });
     }
}
