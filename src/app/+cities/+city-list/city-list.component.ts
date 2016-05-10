import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { StatsService } from '../../shared/stats.service';



@Component({
  moduleId: module.id,
  selector: 'app-city-list',
  templateUrl: 'city-list.component.html',
  styleUrls: ['city-list.component.css'],
  directives: [
  	ROUTER_DIRECTIVES
  ]
})
export class CityListComponent implements OnInit {
	cities: any[];

  constructor(
  	private stats: StatsService
  ) {}

  ngOnInit() {
  	this.stats
  	.getCities()
  	.subscribe((data)=> {
			this.cities = data.fitxes.v;
  	})
  }

}
