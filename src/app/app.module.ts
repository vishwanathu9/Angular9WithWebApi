import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListCompoent } from './employee/employee.list.component';
import { EmployeeTitlePipe } from './pipes/employeeTitle.Pipe';
import { EmployeeCountComponent } from './employee-count/employee-count.component';
import { EmployeeService } from './employee/employeeservices/employee.service';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListCompoent,
    EmployeeTitlePipe,
    EmployeeCountComponent ,
    
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
