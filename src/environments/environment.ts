// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};
export const BASE_URL: string = 'https://webapigap.azurewebsites.net/api/v1/';
export const VALIDATE_USER: string = 'Usuarios/GetUser';
export const GET_TOKEN: string = 'token';
export const POLICIES: string = 'Polizas/GetPolicies';
export const GET_CLIENTS: string = 'Clientes/GetClients';
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
