import { Injectable, OnInit } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppService implements OnInit {
  stepsStatus;
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
}
