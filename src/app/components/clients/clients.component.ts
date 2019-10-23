import { Component, OnInit } from '@angular/core';
import { ManagerClientsService } from '../../../services/manager-clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.sass']
})
export class ClientsComponent implements OnInit {


  clients = []
 
  constructor(private managerClientsService : ManagerClientsService) { }

  ngOnInit() {
    this.getPolices()
  }


  getPolices(){
    this.managerClientsService.getClients().subscribe((res)=>{
      if (res.length > 0){
        this.clients = res;
      }
    })
  }
}
