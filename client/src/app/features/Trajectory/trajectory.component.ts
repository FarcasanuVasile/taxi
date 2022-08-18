import { Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { AppService } from 'src/app/app.service';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-trajectory',
  templateUrl: 'trajectory.component.html',
  styleUrls: ['trajectory.component.scss'],
})
export class TrajectoryComponent {
  routeData: {};
  isSecondInputEnabled: boolean = false;
  time: string | undefined;
  distance: string | undefined;
  mapOb: google.maps.Map;
  fromAutoComplete: google.maps.places.Autocomplete;
  destinationAutoComplete: google.maps.places.Autocomplete;
  directionsDisplay: google.maps.DirectionsRenderer;

  @ViewChild('map') map: ElementRef;
  @ViewChild('depart') fromElementRef!: ElementRef;
  @ViewChild('destination') destinationElementRef!: ElementRef;

  constructor(private ngZone: NgZone, private appService: AppService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.setAutoCompleteListener(
      this.fromAutoComplete,
      this.fromElementRef,
      true,
      false
    );
    this.setAutoCompleteListener(
      this.destinationAutoComplete,
      this.destinationElementRef,
      true,
      true
    );
    this.setMap();
    this.directionsDisplay = new google.maps.DirectionsRenderer({
      map: this.mapOb,
    });
  }

  setAutoCompleteListener(
    element: google.maps.places.Autocomplete,
    elementRef: ElementRef,
    enableSecondInput: boolean = false,
    isReadyToDisplayDirections: boolean = false
  ) {
    element = new google.maps.places.Autocomplete(
      elementRef.nativeElement,
      environment.autoCompleteConfig
    );
    element.addListener('place_changed', () => {
      this.ngZone.run(() => {
        const place: google.maps.places.PlaceResult = element.getPlace();
        if (enableSecondInput) {
          this.isSecondInputEnabled = true;
          if (!place?.geometry) return;
          const lat = place.geometry.location?.lat()!;
          const lng = place.geometry.location?.lng()!;
          const coords: google.maps.LatLng = new google.maps.LatLng(lat, lng);
          this.mapOb.setCenter(coords);
        }
        if (!isReadyToDisplayDirections) {
          this.directionsDisplay.setMap(null);
          this.appService.setStepStatus(0, false);
          this.destinationElementRef.nativeElement.value = '';
        }
        if (isReadyToDisplayDirections) this.displayDirections();
      });
    });
  }

  setMap() {
    this.mapOb = new google.maps.Map(
      this.map.nativeElement,
      environment.mapOptions
    );
  }

  displayDirections() {
    this.directionsDisplay.setMap(this.mapOb);

    const request: google.maps.DirectionsRequest = {
      origin: this.fromElementRef.nativeElement.value,
      destination: this.destinationElementRef.nativeElement.value,
      travelMode: google.maps.TravelMode.DRIVING,
    };

    const directionsService = new google.maps.DirectionsService();
    directionsService.route(request, (response, status) => {
      if (status == google.maps.DirectionsStatus.OK) {
        this.directionsDisplay.setDirections(response);
        this.routeData = { ...response?.routes[0].legs[0] };
        this.time = response?.routes[0].legs[0].duration?.text;
        this.distance = response?.routes[0].legs[0].distance?.text;
      }
    });
    this.appService.setStepStatus(0, true);
    this.appService.setBookingTrajectory({
      from: this.fromElementRef.nativeElement.value,
      to: this.destinationElementRef.nativeElement.value,
    });
  }
}
