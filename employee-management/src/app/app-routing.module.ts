import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';


const routes: Routes = [ { path:'', component: EmployeeComponent,canActivate:[AuthGaurdService]},
{ path:'addemployee', component: AddEmployeeComponent,canActivate:[AuthGaurdService] },
{ path: 'login', component: LoginComponent},
{ path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService]},];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
