import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../services/authentication.service"
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mode:number=0;
  constructor(private authService:AuthenticationService, private router:Router) { }

  ngOnInit() {
  }
  onLogin(user:any){
    this.authService.login(user)
    .subscribe((resp:any) =>{

        console.log(resp.headers)
        let jwt=resp.headers.get('authorization');
        console.log("--------------"+jwt);
        this.authService.saveToken(jwt);
        //console.log(resp.headers.get("Authorization"))
        this.router.navigateByUrl('/tasks');


    },err=>{
    console.log(err.error)
        this.mode=1;
    });
  }

}
