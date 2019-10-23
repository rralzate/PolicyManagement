import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizationService } from 'src/services/authorization.service';
import { LoginComponent } from './components/login/login.component';
import { RegisterUserComponent } from './components/registerUser/registerUser.component';
import { PoliciesComponent } from './components/policies/policies.component';
import { ClientsComponent } from './components/clients/clients.component';
import { PolicyComponent } from './components/policy/policy.component';
import { HttpClientModule } from '@angular/common/http';
import { ManagerPoliciesService } from '../services/manager-policies.service';
import { ManagerClientsService } from '../services/manager-clients.service';
import { FormClientPolicyComponent } from './components/form-client-policy/form-client-policy.component';
import { MyGuardService } from '../services/my-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterUserComponent,
    PoliciesComponent,
    ClientsComponent,
    PolicyComponent,
    FormClientPolicyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthorizationService, ManagerPoliciesService, ManagerClientsService, MyGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
