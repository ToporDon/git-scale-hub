import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AccountModule } from '../pages/account/account.module';
import { FormsModule } from '@angular/forms';
import { HttpService } from './providers/http.service';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    AccountModule
  ],
  exports: [
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    AccountModule
  ],
  providers: [
    HttpService
  ]
})
export class SharedModule { }
