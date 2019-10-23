import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { BASE_URL, GET_TOKEN } from '../environments/environment';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class AuthorizationService {

  
  isLogged: Subject<boolean> = new Subject<boolean>();
  loggedIn = false;
  constructor(private http: HttpClient) { 
    this.haveSession();
  }

  login(email, password): Observable<any>{

    let body = new URLSearchParams();
    body.set('grant_type', 'password');
    body.set('username', email);
    body.set('password', password);
    body.set('client_id', 'Polizas_Web');

    let header = new HttpHeaders()
    header.set('Accept', 'application/json');
    header.set('Content-Type', 'application/x-www-form-urlencoded');
    header.set( 'No-Auth', 'True');

    let options = {
        headers: header
    };

    return this.http.post(BASE_URL+GET_TOKEN, body.toString(), options)
  }

  public registro = (nombre, email, password) =>{
    let body = {
      Nombre: nombre,
      Email: email,
      Contrasena: password,
      Estado: true
    }
    return this.http.post(BASE_URL+'/Usuarios/AddUser', body)
    
  }
  
  getToken(){
    return localStorage.getItem('access_token');
  }

  setToken(token){
    localStorage.setItem('access_token', token);
  }
  
  haveSession(): Observable<boolean>{
    return this.isLogged
  }

  initSession(){
    this.loggedIn = true;
    return this.isLogged.next(true);
  }

  logout(){
    localStorage.setItem('access_token', '');
    localStorage.setItem('nameUser', ''); 
    return this.isLogged.next(false);
  }
  
  getName(){
    return localStorage.getItem('nameUser'); 
  }

  setName(nameUser){
    return localStorage.setItem('nameUser', nameUser); 
  }
  

}
