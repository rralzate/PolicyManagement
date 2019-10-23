import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../../services/authorization.service';
import { ManagerPoliciesService } from '../../../services/manager-policies.service';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.sass']
})
export class PoliciesComponent implements OnInit {

  loggedIn = false
  policies = []
  
  constructor(private autorizacionService: AuthorizationService, private managerPoliciesService: ManagerPoliciesService) {
    this.getSession();
    this.getPolices();
   }

  ngOnInit() {
  }

  getSession(){
    if (this.autorizacionService.getToken() != ''){
      this.loggedIn = true
    }
  }

  getPolices(){
    
    this.managerPoliciesService.getPolicies().subscribe((res)=>{
      if (res.length > 0){
        this.policies = res;
        
      }
    })
  }

  confirmDeletePolicy(id){
    
    let option = confirm("Really you want to delete this policy");
    if (option == true) {
        this.managerPoliciesService.delete(id).subscribe((res)=>{
          this.policies = this.policies.filter((policy) => {
            if(policy.IdPolizaSeguro == id){
                return false;
            }else{
                return true;
            }
          })
        })
	  } 
	
  }

}
