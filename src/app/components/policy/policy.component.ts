import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManagerPoliciesService } from 'src/services/manager-policies.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {


  policy:any = {};
  id:any = null;
  nombreBtn = 'dfff';
  title = ''
  constructor(private route: ActivatedRoute, private managerPoliciesService : ManagerPoliciesService, private router: Router) { 
    this.id  = route.snapshot.params['id'];
    if (this.id != 'new')
    {
      this.nombreBtn = 'Edit'
      this.title = 'Edit'
      this.getPolicy(this.id)
      
    }else{
      this.title = 'Create'
      this.nombreBtn = 'Save'
    }
  }

  ngOnInit() {
  }

  getPolicy(id){
    this.managerPoliciesService.getPolicyById(id).subscribe((res)=>{
      this.policy = res
    })
  }

  savePolicy(){
    if (this.id != 'new'){
      this.managerPoliciesService.edit(this.policy).subscribe((res)=>{
        alert('Policy Editied Successfull');
      });
      
    }else{
      this.managerPoliciesService.save(this.policy).subscribe(
        (data) => {
          
          alert('Policy Saved');
          this.router.navigate(['/policies']);
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('Client-side error occured.');
          } else {
            console.log('Server-side error occured.');
          }
        }
      );  
    }
  }
}