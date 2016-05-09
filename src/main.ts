import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { TestAngular2AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(TestAngular2AppComponent);
