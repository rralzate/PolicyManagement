import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { ManagerPoliciesService } from 'src/services/manager-policies.service';
import { ManagerClientsService } from 'src/services/manager-clients.service';

@Component({
  selector: 'app-form-client-policy',
  templateUrl: './form-client-policy.component.html',
  styleUrls: ['./form-client-policy.component.sass']
})

export class FormClientPolicyComponent implements OnInit {

  client = {};
  idCLient = 0;
  idPolicy = 0;
  policies = [];
  percenOfCoverage = 0;
  
  private percent: FormControl;

  constructor(private route: ActivatedRoute, private router: Router, private managerPoliciesService : ManagerPoliciesService, private managerClientService : ManagerClientsService) {
    this.idCLient  = route.snapshot.params['id'];
    if (this.idCLient != undefined)
    {
      this.getClient(this.idCLient)
      this.getPolicies();
    }else{
      this.router.navigate(['/clients']);
    }
    
  }

  ngOnInit() {  }

  getPolicies(){
    this.managerPoliciesService.getPolicies().subscribe((res)=>{
      this.policies = res
    })
  }

  getClient(id){
    this.managerClientService.getClient(this.idCLient).subscribe((res) => {
      this.client = res
    })
  }

  putSetpoint(inputRange){
    console.log(inputRange);
  }

  asociar(){
    this.managerPoliciesService.asociatePolicyClient(this.idPolicy, this.idCLient, this.percenOfCoverage).subscribe((res)=>{
      alert('The client ' + this.client['Nombre'] +  ' has acquired the policy.')
    });
  }

}
