import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TasksComponent } from './tasks/tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { RegistrationComponent } from './registration/registration.component';
import { Routes,RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
//import { Observable } from "rxjs/Observable";
import { AuthenticationService } from "./services/authentication.service"
//import { JwtHelper } from 'angular2-jwt';
const appRoutes:Routes=[
      {path:'login',component:LoginComponent},
      {path:'tasks',component:TasksComponent},
      {path:'new-task',component:NewTaskComponent},
      {path:'register',component:RegistrationComponent},
      {path:"",redirectTo:"login",pathMatch:"full"}
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TasksComponent,
    NewTaskComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
   // Observable
    
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
