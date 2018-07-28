import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user:string;pwd:any;list=[]
  adminActivate=false;userActivate:boolean

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    //console.log(this.user)
    //this.list.push(this.user);
    if(this.user=='Admin'&&this.pwd=='12345'){
      //console.log('Admin user')
      this.adminActivate=true
      this.list=["You are admin"]
      this.list.push(this.adminActivate)
      this.router.navigate(['./admin-sign']);
    } else if(this.user=='User'&&this.pwd=='123'){
      //console.log('User user')
      this.userActivate=true
      this.list=["You are user"]
      this.router.navigate(['./user-sign']);
    } else{
      this.list=[]
      this.list.push("Invalid attempt");
      this.user='',this.pwd=''
    }
  }
}
