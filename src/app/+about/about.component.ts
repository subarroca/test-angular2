import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/common';

import { Person } from './shared/person';


@Component({
  moduleId: module.id,
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
})
export class AboutComponent implements OnInit {
  model: Person = new Person('Henry Gale', 'magician@oz.net', 13);
  submitted = false;


  constructor() {}

  ngOnInit() {}

  onSubmit() {
    this.submitted = true;
  }

}
