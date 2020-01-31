import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../services/authentication.service"
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks;
  constructor(public authService:AuthenticationService,private router:Router) { }
  user=null;
  ngOnInit() {
    this.authService.getTasks()
    .subscribe(data=>{
      this.tasks=data;
      this.user=new JwtHelper().decodeToken(this.authService.jwtToken).sub;
      console.log(this.tasks);
    },err=>{
      console.log(err);
      this.authService.logout();
      this.router.navigateByUrl('/login');
    });
  }
  onNewTask(){
    this.router.navigateByUrl('/new-task');
  }

}
