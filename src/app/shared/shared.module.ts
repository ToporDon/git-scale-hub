import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AccountModule } from '../pages/account/account.module';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    AccountModule

  ],
  exports: [
    BrowserAnimationsModule,
    MaterialModule,
    AccountModule
  ]
})
export class SharedModule { }
