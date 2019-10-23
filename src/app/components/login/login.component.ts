import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../../services/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginParams:any = {};
  constructor(private authorizationService: AuthorizationService , private router:Router) {
    
  }

  login(){
    this.authorizationService.login(this.loginParams.email,this.loginParams.password).subscribe((res)=> {
      if (res.access_token) {
        this.authorizationService.setToken(res.access_token)
        this.authorizationService.setName(res.nameUser)
        this.authorizationService.initSession();
        this.goToHome()
      }
    })
  }
  
  goToHome(){
    this.router.navigate(['/policies'])
  }

  ngOnInit() {
  }

}
