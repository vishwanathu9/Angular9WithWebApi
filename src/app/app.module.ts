import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';



import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListCompoent } from './employee/employee.list.component';
import { EmployeeTitlePipe } from './pipes/employeeTitle.Pipe';
import { EmployeeCountComponent } from './employee-count/employee-count.component';
import { EmployeeService } from './employee/employeeservices/employee.service';
import { ErrorIntercept } from './Interceptors/error.interceptor';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './login/authservice';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'employees', component: EmployeeListCompoent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
  
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListCompoent,
    EmployeeTitlePipe,
    EmployeeCountComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [
    EmployeeService,AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorIntercept, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
