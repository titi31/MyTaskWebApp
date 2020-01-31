import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  username:any;
  roleid;
  roleName;
  mode=0;
  constructor(private authService:AuthenticationService,private router:Router) { }

  ngOnInit() {
  }
  onSaveUser(user){
    this.authService.saveUser(user).subscribe(
      (resp:any)=>{
        console.log(user);
        console.log(resp);
        this.username=resp.username;
        this.roleid=resp.roles[0].id;
        this.roleName=resp.roles[0].roleName;
        this.mode=1;
        console.log(this.mode)
      },
      err=>{
        console.log(err);
      }
    )
    //this.router.navigateByUrl('/login');
  }
  onSuiv(){
    this.router.navigateByUrl('/login');
  }


}
