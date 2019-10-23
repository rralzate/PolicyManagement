import { Component } from '@angular/core';
import { AuthorizationService } from '../services/authorization.service';
import { BLOCK_SCREEN_EVENT, UNBLOCK_SCREEN_EVENT } from 'src/utils/eventFunctions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'policyManagement';

  loggedIn = false;
  email = "";
  loggeduser:any = null;
  loading: boolean = false;

  constructor(private autorizacionService: AuthorizationService, private router: Router){
    document.addEventListener(BLOCK_SCREEN_EVENT.type, () => {
			setTimeout(() => {
				this.loading = true;
			}, 10);
		});

		document.addEventListener(UNBLOCK_SCREEN_EVENT.type, () => {
			setTimeout(() => {
				this.loading = false;
			}, 10);
    });
    this.getSession();
  }


  public isLogged(){
    return ;
  }

  logout(){
    this.autorizacionService.logout();
    this.router.navigate(['/login']);
  }

  getSession(){
    this.autorizacionService.haveSession().subscribe((session)=>{
      this.loggedIn = session
    });

    if (this.autorizacionService.getToken() != ''){
      this.autorizacionService.initSession();
      this.loggeduser = this.autorizacionService.getName();
    }
  }

}
