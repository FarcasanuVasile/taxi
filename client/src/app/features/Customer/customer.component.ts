import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('emailInput') email: ElementRef;
  @ViewChild('pickupDateInput') pickupDate: ElementRef;
  @ViewChild('pickupTimeInput') pickupTime: ElementRef;
  @ViewChild('phoneInput') phone: ElementRef;
  constructor(private appService: AppService) {}
  ngOnInit() {}
  onCheckForm(event) {
    const isUserData = [
      this.name,
      this.email,
      this.pickupDate,
      this.pickupTime,
      this.phone,
    ].every((item) => item.nativeElement.value != '');
    if (isUserData) {
      this.appService.setStepStatus(2, true);
      this.appService.setBookingUser({
        name: this.name.nativeElement.value,
        email: this.email.nativeElement.value,
        date: this.pickupDate.nativeElement.value,
        time: this.pickupTime.nativeElement.value,
        phone: this.phone.nativeElement.value,
      });
    } else this.appService.setStepStatus(2, false);
  }
}
