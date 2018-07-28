import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-admin-sign',
  templateUrl: './admin-sign.component.html',
  styleUrls: ['./admin-sign.component.css']
})
export class AdminSignComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  create(){
    this.router.navigate(['./create']);
  }
  read(){
    this.router.navigate(['./read']);
  }
  update(){
    this.router.navigate(['./update']);
  }
  delete(){
    this.router.navigate(['./delete']);
  }
}
