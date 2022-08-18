import { Injectable, OnInit } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppService implements OnInit {
  stepsStatus;
  booking;
  constructor() {}
  ngOnInit(): void {
    this.stepsStatus = [false, false, false, false];
  }
  setStepStatus(index, status) {
    this.setStepStatus[index] = status;
  }
  getStepStatus(index) {
    return this.setStepStatus[index];
  }
  setBookingTrajectory(trajectory) {
    this.booking = { ...this.booking, trajectory };
  }
  setBookingCar(carId) {
    this.booking = { ...this.booking, car: carId };
  }
  setBookingUser(user) {
    this.booking = { ...this.booking, user };
  }
}
