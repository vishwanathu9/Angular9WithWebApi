import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css']
})
export class EmployeeCountComponent implements OnInit {

  @Input()
  all: number;
  @Input()
  male: number ;
  @Input()
  female: number ;

  
  selectedRadioButtonValue:string  ='All';

  @Output()
  countRadioButtChanged:EventEmitter<string>=new EventEmitter<string>();

onRadioButtonSelectionChange(){
  this.countRadioButtChanged.emit(this.selectedRadioButtonValue);
}






  constructor() { }

  ngOnInit(): void {
  }

}
