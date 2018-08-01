import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatIconModule, MatSelectModule, MatButtonModule, MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule} from '@angular/material';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { SignInComponent } from './users/sign-in/sign-in.component';
import { SignUpComponent } from './users/sign-up/sign-up.component';
import { AppRoutingModule } from './app-routing.module';
import { UserSignComponent } from './users/user-sign/user-sign.component';
import { AdminSignComponent } from './users/admin-sign/admin-sign.component';
import { CreateComponent } from './users/create/create.component';
import { ReadComponent } from './users/read/read.component';
import { UpdateComponent } from './users/update/update.component';
import { DeleteComponent } from './users/delete/delete.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { VehicleService} from './vehicle.service';

const appRoutes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'users', component: UsersComponent },
  { path: 'read', component: ReadComponent},
  { path: 'update/:id', component: UpdateComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SignInComponent,
    SignUpComponent,
    UserSignComponent,
    AdminSignComponent,
    CreateComponent,
    ReadComponent,
    UpdateComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatOptionModule, 
    MatIconModule,
    MatSelectModule, 
    MatButtonModule, 
    MatCardModule, 
    MatTableModule, 
    MatDividerModule, 
    MatSnackBarModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
