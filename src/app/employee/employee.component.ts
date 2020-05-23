import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnChanges,OnInit {

  firstName: string = 'Tom';
  lastName: string = 'Carry';
  gender: string = 'Male';
  age: number = 20;
  showDetails: boolean = false;

  @Input()  SimpleInput: string;

  
    constructor() {     }


  ngOnChanges(changes: SimpleChanges) {

    for (let propertyName in changes) {
      let change = changes[propertyName];
      let current = JSON.stringify(change.currentValue);
      let previous = JSON.stringify(change.previousValue);

      console.log(propertyName + ' :Currentvalue= ' + current + ': PreviousValue=' + previous);
    }
  }
 
  ngOnInit(): void {
}
}
