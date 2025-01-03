import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent, RegistrationComponent} from "./component";
import {RouterModule, Routes} from "@angular/router";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegistrationComponent,
  }];


@NgModule({
  declarations: [LoginComponent,RegistrationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormField,
    MatInput,
    MatLabel,
    MatButton,
    ReactiveFormsModule,
    MatError
  ]
})
export class AuthModule { }
