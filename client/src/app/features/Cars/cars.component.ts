import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponents implements OnInit {
  cars;
  constructor() {}
  ngOnInit(): void {
    this.cars = environment.cars;
  }
}
