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

const cars = [
  {
    id: 0,
    make: 'Peugeot',
    model: '407',
    color: 'Gri',
    year: '2006',
    img: 'https://th.bing.com/th/id/R.ef59b8951025fe502b6aebe69060c07d?rik=GOtHWeF%2by7Ucqw&pid=ImgRaw&r=0',
  },
  {
    id: 1,
    make: 'Peugeot',
    model: '508',
    color: 'Neagra',
    year: '2016',
    img: 'https://th.bing.com/th/id/R.0c595f3dc406c498a2a24de5f9dfd461?rik=dK5HsPxHFYgvdg&pid=ImgRaw&r=0',
  },
  {
    id: 2,
    make: 'Audi',
    model: 'A4',
    color: 'Galbena',
    year: '2015',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Audi_A4_allroad_quattro_Phantomschwarz.JPG/1280px-Audi_A4_allroad_quattro_Phantomschwarz.JPG',
  },
  {
    id: 3,
    make: 'BMW',
    model: '320',
    color: 'Albastra',
    year: '2018',
    img: 'https://th.bing.com/th/id/R.2b59cb0402739163cb997ad70e81b936?rik=fAv47ffFxph97A&pid=ImgRaw&r=0',
  },
];

export const environment = {
  production: false,
  autoCompleteConfig: { componentRestrictions: { country: 'RO' } },
  mapOptions,
  cars,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
