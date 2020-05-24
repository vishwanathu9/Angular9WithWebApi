import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { doesNotReject } from 'assert';

@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css']
})
export class EmployeeCountComponent implements OnChanges, OnInit {


  @Input() SimpleInput: string;

  @Input() all: number;
  @Input() male: number;
  @Input() female: number;

  selectedRadioButtonValue: string = 'All';

  @Output()
  countRadioButtChanged: EventEmitter<string> = new EventEmitter<string>();

  onRadioButtonSelectionChange() {
    this.countRadioButtChanged.emit(this.selectedRadioButtonValue);
  }

  ngOnChanges(changes: SimpleChanges) {

    for (let prop in changes) {
      let change = changes[prop];
      let currentvalue = JSON.stringify(change.currentValue);
      let previousValue = JSON.stringify(change.previousValue);

      console.log('Curr : '+ currentvalue + 'pre'+ previousValue);
      
    }

  }
  constructor() { }

  ngOnInit(): void {
  }

}
