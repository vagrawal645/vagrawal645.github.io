import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  main = 'form';
  newRequest() {
    this.main = 'form';
  }
  pendingRequests() {
    this.main = 'pending';
  }
  constructor() { }

  ngOnInit() {
  }

}
