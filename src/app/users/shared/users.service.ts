import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Response } from "@angular/http";
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { Users } from './users';

@Injectable()
export class UsersService {
  readonly rootUrl = 'http://localhost:35257';
  constructor(private http: HttpClient) { }
 
  registerUser(user : Users){
    const body: Users = {
      UserName: user.UserName,
      Password: user.Password,
      Email: user.Email,
      FirstName: user.FirstName,
      LastName: user.LastName
    }
    return this.http.post(this.rootUrl + '/api/User/Register', body);
  }
}
