import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from 'src/app/interface/employee';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class EmployeeService {



    constructor(private _http: HttpClient) { }

    private REST_API_SERVER = 'https://localhost:44337/api/Employees';

    public getEmployees() {
        return this._http.get(this.REST_API_SERVER);
    }

}

