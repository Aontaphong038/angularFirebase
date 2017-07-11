import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  @Input() dataList: any[];
  @Output() onEditRow: EventEmitter<any> = new EventEmitter();
  @Output() onDeleteRow: EventEmitter<any> = new EventEmitter();

  constructor(private firebase: FirebaseService) { }

  ngOnInit() {
  }

  clickEditRow(rowData) {
    this.onEditRow.emit({ ...rowData, key: rowData.$key });
  }

  clickDeleteRow(rowData) {
    this.onDeleteRow.emit(rowData.$key);
  }

}
