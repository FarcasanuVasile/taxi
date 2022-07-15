import { Injectable, OnInit } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppService implements OnInit {
  step_one_completed: boolean;
  step_two_completed: boolean;
  step_three_completed: boolean;
  step_four_completed: boolean;
  constructor() {}
  ngOnInit(): void {
    this.step_one_completed = false;
    this.step_two_completed = false;
    this.step_three_completed = false;
    this.step_four_completed = false;
  }
}
