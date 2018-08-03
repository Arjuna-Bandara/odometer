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
    
  }
}
