import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  summary;
  car;

  constructor(private appService: AppService) {}
  ngOnInit() {
    this.summary = this.appService.booking;
    this.car = environment.cars[this.summary.car];
    console.log(this.summary, this.car);
  }
}
