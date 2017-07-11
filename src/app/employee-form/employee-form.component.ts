import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  @Input() formModel: any = {};
  @Output() formModelChange: EventEmitter<any> = new EventEmitter();

  constructor(private firebase: FirebaseService) { }

  ngOnInit() {
  }

  submitForm(e, payload) {
    e.preventDefault();
    if (payload.key) {
      this.firebase.editData(payload)
        .then((val) => alert('update successful'))
        .catch(() => alert('update fail,we got some problems'));
    } else {
      this.firebase.addData(payload);
    }

    // console.log(payload);
  }

  clearForm() {
    this.formModel = {};
    this.formModelChange.emit({});
  }

}
