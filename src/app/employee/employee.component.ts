import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  firstName:string ='Tom';
  lastName :string ='Carry';
  gender:string ='Male';
  age:number=20;
  showDetails:boolean=false;
  Hello:string;

  toggleDetails():void{
    this.showDetails=!this.showDetails;
  }

  onClick():void{
    alert("button clicked");
  };
  constructor() { }

 

  ngOnInit(): void {

   
  }

}
