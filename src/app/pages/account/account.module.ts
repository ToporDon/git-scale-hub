import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountPage } from './account';
import { AccountComponentModule } from '../../components/account/account-component.module';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    AccountComponentModule
  ],
  exports: [
    AccountPage
  ],
  declarations: [
    AccountPage
  ]
})
export class AccountModule { }
