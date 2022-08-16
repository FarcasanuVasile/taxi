import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  currentStep: number;
  steps!: any;
  constructor(private appService: AppService) {}
  ngOnInit(): void {
    this.currentStep = 0;
    this.steps = [
      { id: 0, title: 'Alege traseul' },
      { id: 1, title: 'Alege masina' },
      { id: 2, title: 'Introdu datele personale' },
      { id: 3, title: 'Sumar cursa' },
    ];
  }
  currentStepCompleted(): boolean {
    const isCompleted = this.appService.getStepStatus(this.currentStep);
    return isCompleted;
  }
  onStepForward() {
    if (this.currentStep == this.steps.length) return;
    this.currentStep++;
  }
  onStepBackwards() {
    if (this.currentStep == 0) return;
    this.currentStep--;
  }
}
