// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment: any = {
  production: false,
  api: {
    udemy: {
      auth: {
        type: 'Basic',
        credentials: 'YWQxMmVjYTljYmUxN2FmYWM2MjU5ZmU1ZDk4NDcxYTY6YTdjNjMwNjQ2MzA4ODI0YjIzMDFmZGI2MGVjZmQ4YTA5NDdlODJkNQ=='
      },
      subDomain: 'www'
    }
  },
  message: {
    duration: 5000
  },
  download: {
    retry: 10,
    interval: 10000
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
