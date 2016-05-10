import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import {TRANSLATE_PROVIDERS, TranslateService, TranslatePipe} from 'ng2-translate/ng2-translate';


import { AboutComponent } from './+about';
import { CityListComponent } from './+cities/+city-list';
import { CityComponent } from './+cities/+city';

import { StatsService } from './shared/stats.service';

@Component({
  moduleId: module.id,
  selector: 'test-angular2-app',
  templateUrl: 'test-angular2.component.html',
  styleUrls: ['test-angular2.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    TRANSLATE_PROVIDERS,
  	HTTP_PROVIDERS,
  	ROUTER_PROVIDERS,
  	StatsService
  ],
  pipes: [TranslatePipe]
})
@Routes([
  {path: '/about', component: AboutComponent},
  {path: '/cities', component: CityListComponent},
  {path: '/city/:id', component: CityComponent}
])
export class TestAngular2AppComponent {
  name: string = 'Mr Marshall';
  lang: string;

  constructor(private translate: TranslateService) {
    let lang = navigator.language.split('-')[0];

    this.translate.setDefaultLang('en');
    this.setLang(lang);
  }

  setLang(lang) {
    this.lang = /(ca|es|en)/gi.test(lang) ? lang : 'en';
    this.translate.use(this.lang);
  }
}
