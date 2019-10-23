import { Injectable } from '@angular/core';
import { AuthorizationService } from './authorization.service';
import { CanActivate } from '@angular/router';

@Injectable()
export class MyGuardService implements CanActivate {
  loggedIn = false;
  constructor(private autorizacionService: AuthorizationService){
    
     
      if (this.autorizacionService.getToken()!='' && this.autorizacionService.getToken()!= undefined){
        this.loggedIn = false;
      }else{
        this.loggedIn = true;
      }
      
  }

  canActivate(){
    
    return this.loggedIn
  }

}
