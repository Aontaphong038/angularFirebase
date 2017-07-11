import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  dataList: any[] = [];
  rowData: any = {};

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService
      .getDataList()
      .subscribe((value) => {
        this.dataList = value;
      });
  }

  receiveRowData(rowData) {
    this.rowData = rowData;
  }

  receiveDeleteKey(rowData) {
    console.log(rowData);
    this.firebaseService.deleteData(rowData);
  }

}
