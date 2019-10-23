import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../../services/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registerUser.component.html',
  styleUrls: ['./registerUser.component.scss']
})
export class RegisterUserComponent implements OnInit {
  registro: any = {};
  constructor(private autorizacionService: AuthorizationService, private router: Router) { 
     
  }

  registrar(){
    this.autorizacionService.registro(this.registro.nombre, this.registro.email, this.registro.password).subscribe((res)=>{
      alert('User saved');
      this.router.navigate(['/login']);
    }); 
  }

  ngOnInit() {
  }

}
