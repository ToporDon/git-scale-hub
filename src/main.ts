import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import 'hammerjs';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  // .then(() => {
  //   registerServiceWorker('sw-default');
  // })
  .catch(err => console.log(err));

function registerServiceWorker(swName: string) {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register(`/${swName}.js`)
      .then(reg => {
        console.log('[App] Successful service worker registration', reg);
      })
      .catch(err =>
        console.error('[App] Service worker registration failed', err)
      );
  } else {
    console.error('[App] Service Worker API is not supported in current browser');
  }
}

  // if ('serviceWorker' in navigator) {
  //   navigator.serviceWorker.register('service-worker.js')
  //     .then(() => console.log('service worker installed'))
  //     .catch(err => console.error('Error', err));
  // }
