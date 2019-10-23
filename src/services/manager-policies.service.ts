import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL, POLICIES } from '../environments/environment';
import { AuthorizationService } from './authorization.service';

@Injectable({
  providedIn: 'root'
})
export class ManagerPoliciesService {


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

   getPolicyById(id) : Observable<any> {
    return this.http.get(BASE_URL+'Polizas/GetSingle?idPoliza='+id, this.headers)
   }

   getPolicies(): Observable<any>{
     return this.http.get(BASE_URL+POLICIES,this.headers)
   }

   edit(policy):  Observable<any>{
     return this.http.post(BASE_URL+'Polizas/EditPolicy',policy, this.headers)
   }

   save(policy):  Observable<any>{
      return this.http.post(BASE_URL+'Polizas/AddPolicy',policy, this.headers)
   }

   asociatePolicyClient(idPolicy: number, idClient: number, percentCoverage: number): Observable<any> {
      let body = {
        IdCliente: idClient,
        IdPolizaSeguro: idPolicy,
        PorcentajeCubrimiento: percentCoverage
      }
      
      return this.http.post(BASE_URL+'PolizasCliente/AddPolicyClient', body, this.headers)
   }

   delete(id): Observable<any>{
     let body = {
        IdPolizaSeguro: id
     }
    return this.http.post(BASE_URL+'Polizas/DeletePolicy', body, this.headers)
   }
}
