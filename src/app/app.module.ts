import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SharedModule } from './shared/shared.module';
import { environment } from '../environments/environment';
import { HomePage } from './pages/home/home';


@NgModule({
  declarations: [
    AppComponent,
    HomePage
  ],
  exports: [
    HomePage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    // environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
