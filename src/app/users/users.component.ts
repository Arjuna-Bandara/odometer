import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '../user.service';

import { FormGroup, FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private userService: UserService, private router: Router, private fb: FormBuilder) { 
    this.loginForm = this.fb.group( {
      email: ['', Validators.required],
      pwd: ['', Validators.required]
    });
  }

  login(email, password) {
    this.userService.login(email, password).subscribe((user) => {
      this.router.navigate([`/search`]);
    })
  };

  ngOnInit() {
  }
}
