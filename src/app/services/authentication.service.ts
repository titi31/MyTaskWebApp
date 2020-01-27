import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import {enableProdMode} from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private host:string="http://localhost:8080";
  headers = new HttpHeaders({'Access-Control-Allow-Origin' : '*'})
  constructor(private http: HttpClient) {

   }
   login(user:any){



    return this.http.post(this.host+"/login",user,{observe: "response"});
   }
    saveToken(jwt:string){
       localStorage.setItem("token",jwt)
      }
}
