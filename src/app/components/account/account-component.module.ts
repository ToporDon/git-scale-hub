import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material.module';
import { HttpService } from '../../shared/providers/http.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    HttpService
  ]
})
export class AccountComponentModule { }
