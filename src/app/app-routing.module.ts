import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './users/sign-in/sign-in.component';
import { SignUpComponent } from './users/sign-up/sign-up.component'
import { UsersComponent } from './users/users.component'
import { UserSignComponent } from './users/user-sign/user-sign.component'
import { AdminSignComponent } from './users/admin-sign/admin-sign.component'
import { CreateComponent } from './users/create/create.component'
import { ReadComponent } from './users/read/read.component'
import { UpdateComponent } from './users/update/update.component'
import { DeleteComponent } from './users/delete/delete.component'

const routes: Routes = [
  {path:'',redirectTo:'/users',pathMatch:'full'},
  {path:'sign-in',component:SignInComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'users',component:UsersComponent},
  {path:'user-sign',component:UserSignComponent},
  {path:'admin-sign',component:AdminSignComponent},
  {path:'create',component:CreateComponent},
  {path:'read',component:ReadComponent},
  {path:'update',component:UpdateComponent},
  {path:'delete',component:DeleteComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
