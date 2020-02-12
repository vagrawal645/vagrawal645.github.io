import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material';
@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {
  Approvers = ['Approver1' , 'Approver2' , 'Approver3', 'Approver4'];
  constructor() { }

  ngOnInit() {
  }

}
