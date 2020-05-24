import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../interface/employee';
import { EmployeeService } from './employeeservices/employee.service';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({

    selector: 'list-employee',
    templateUrl: './employee.list.component.html'
})
export class EmployeeListCompoent implements OnInit {
    userText: string;
    selectedEmployeeCountRadioButton: string = 'All';
    employees: IEmployee[];

    constructor(private _employeeService: EmployeeService) {
    }    
 

    ngOnInit() {
        this._employeeService.getEmployees()
            .subscribe((data: IEmployee[]) => {
                this.employees = data;
            })
    }
    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }
    getTotalEmployeeCount(): number {
        return this.employees.length;
    }

    getTotalMaleEmployeeCount(): number {
        return this.employees.filter(e => e.gender === "Male").length;
    }

    getTotalFemaleEmployeeCount(): number {
        return this.employees.filter(x => x.gender === "Female").length;
    }

    

}