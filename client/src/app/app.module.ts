import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';

import { AppComponent } from './app.component';
import { TrajectoryComponent } from './features/Trajectory/trajectory.component';
import { CarsComponents } from './features/Cars/cars.component';
import { CustomerComponent } from './features/Customer/customer.component';
import { FormsModule } from '@angular/forms';
import { SummaryComponent } from './features/Summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    TrajectoryComponent,
    CarsComponents,
    CustomerComponent,
    SummaryComponent,
  ],
  imports: [BrowserModule, GoogleMapsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
