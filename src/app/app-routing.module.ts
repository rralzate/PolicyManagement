import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterUserComponent } from './components/registerUser/registerUser.component';
import { PoliciesComponent } from './components/policies/policies.component';
import { ClientsComponent } from './components/clients/clients.component';
import { PolicyComponent } from './components/policy/policy.component';
import { FormClientPolicyComponent } from './components/form-client-policy/form-client-policy.component';
import { MyGuardService } from 'src/services/my-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'policies', pathMatch: 'full' },
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterUserComponent, canActivate: [MyGuardService]},
  {path:'policies', component: PoliciesComponent},
  {path:'clients', component: ClientsComponent},
  {path:'addPolicy/:id', component: FormClientPolicyComponent},
  {path:'policy/:id', component: PolicyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
