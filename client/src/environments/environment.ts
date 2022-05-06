// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const mapOptions: google.maps.MapOptions = {
  scrollwheel: false,
  zoomControl: false,
  disableDoubleClickZoom: true,
  gestureHandling: 'none',
  mapTypeControl: false,
  streetViewControl: false,
  center: { lat: 44.429678327589055, lng: 26.10919250000003 },
  zoom: 11,
};

export const environment = {
  production: false,
  autoCompleteConfig: { componentRestrictions: { country: 'RO' } },
  mapOptions,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
