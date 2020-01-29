import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
//import {enableProdMode} from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private host:string="https://tasktimo.herokuapp.com";
  private jwtToken=null;
  private roles:Array<any>;
  //headers = new HttpHeaders({'Access-Control-Allow-Origin' : '*'})
  constructor(private http: HttpClient) {

   }
   login(user:any){



    return this.http.post(this.host+"/login",user,{observe: "response"});
   }
    saveToken(jwt){
      this.jwtToken=jwt;
       localStorage.setItem("token",jwt);
      let jwtHelper= new JwtHelper();
       this.roles=jwtHelper.decodeToken(this.jwtToken).roles;
      }
      loadToken(){
        this.jwtToken=localStorage.getItem('token');
      }
    getTasks(){
      if(this.jwtToken==null) this.loadToken();
      console.log(this.jwtToken);
      return this.http.get(this.host+"/tasks",{headers:new HttpHeaders({'authorization':this.jwtToken})});
    
    }
    logout(){
      this.jwtToken=null;
      localStorage.removeItem('token');
    }
    isAdmin(){
      for(let r of this.roles){
        if(r.authority=='ADMIN') return true;
      }
      return false;
    }
    saveTask(task){
      //let headers=new HttpHeaders();
      //headers.append('authorization',this.jwtToken);
      return this.http.post(this.host+"/tasks",task,{headers:new HttpHeaders({'authorization':this.jwtToken})});
    }
}
