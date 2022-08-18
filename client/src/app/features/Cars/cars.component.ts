import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponents implements OnInit {
  cars;
  constructor(private appService: AppService) {}
  ngOnInit(): void {
    this.cars = environment.cars;
  }
  onSelectCar(i) {
    this.appService.setStepStatus(1, true);
    this.appService.setBookingCar(this.cars[i].id);
  }
}
