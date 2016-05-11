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
  currentColor: string;


  private currentColorIndex: number = -1;
  private colors: string[] = ['transparent', 'wheat'];


  constructor(
  	private stats: StatsService
  ) {}

  ngOnInit() {
    this.changeStyle();

    console.time('loadCities');

  	this.stats
  	.getCities()
    .subscribe((data) => {
      console.time('renderCities');
      this.cities = data.fitxes.v;
      console.timeEnd('loadCities');

      setTimeout(
      function() {
        console.timeEnd('renderCities');
      }
      );
  	})
  }

  onInputChanged() {
    console.time('inputChange');

    setTimeout(
      function() {
        console.timeEnd('inputChange');
      }
    );
  }

  changeStyle() {
    console.time('styleChange');

    this.currentColorIndex = (this.currentColorIndex + 1) % this.colors.length;
    this.currentColor = this.colors[this.currentColorIndex];

    setTimeout(
      function() {
        console.timeEnd('styleChange');
      }
    );
  }

}
