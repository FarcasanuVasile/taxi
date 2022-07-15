import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';

import { AppComponent } from './app.component';
import { TrajectoryComponent } from './features/Trajectory/trajectory.component';
import { CarsComponents } from './features/Cars/cars.component';
import { CustomerComponent } from './features/Customer/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    TrajectoryComponent,
    CarsComponents,
    CustomerComponent,
  ],
  imports: [BrowserModule, GoogleMapsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
