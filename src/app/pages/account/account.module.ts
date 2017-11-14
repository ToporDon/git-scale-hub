import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountPage } from './account';
import { AccountComponentModule } from '../../components/account/account-component.module';
import { MaterialModule } from '../../shared/material.module';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../shared/providers/http.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    AccountRoutingModule,
    AccountComponentModule
  ],
  exports: [
    AccountPage
  ],
  declarations: [
    AccountPage
  ],
  providers: [
    HttpService
  ]
})
export class AccountModule { }
