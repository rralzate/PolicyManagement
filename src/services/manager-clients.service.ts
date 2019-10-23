import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthorizationService } from './authorization.service';
import { Observable } from 'rxjs';

import { BASE_URL, GET_CLIENTS } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManagerClientsService {

  header = new HttpHeaders()
  headers = {}
  
  constructor(private http: HttpClient, private autorizacionService : AuthorizationService) {
    this.setHeaders();
   }

   setHeaders(){
    this.header.set('Content-Type', 'application/json');
    this.header.set('Access-Control-Allow-Origin', '*');
    this.header.set( 'Authorization', 'Bearer ' + this.autorizacionService.getToken());
    this.headers = {
      headers: this.header
    };
   }

   getClients(): Observable<any>{
     return this.http.get(BASE_URL+GET_CLIENTS,this.headers)
   }

   getClient(id): Observable<any> {
     return this.http.get(BASE_URL+'Clientes/GetClient?idClient='+id);
   }

}

