import { Component, OnInit } from '@angular/core';
import { RouteSegment } from '@angular/router';

import { StatsService } from '../../shared/stats.service';


@Component({
  moduleId: module.id,
  selector: 'app-city',
  templateUrl: 'city.component.html',
  styleUrls: ['city.component.css']
})
export class CityComponent implements OnInit {
  private id: string;

  public location: string[];
  public info: any[];
  

  constructor(
    segment:RouteSegment,
    private stats: StatsService
  ) {

    this.id = (<any>segment.parameters).id;
  }

  ngOnInit() {
    this.stats.getCityStats(this.id)
    .subscribe((data)=> {
      let fitxes = data.fitxes;

      this.location = fitxes.cols.col.map((info) => {
        return info.content;
      });

      this.info = fitxes.gg.g;
    })
  }

}
