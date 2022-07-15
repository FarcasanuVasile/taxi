import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  currentStep: number;
  steps!: any;
  constructor() {}
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
    return false;
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
