import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  RequestNo: number;
  Requesttitle: string;
  status: string;
  requestinitdate: Date;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {RequestNo: 1, Requesttitle: 'Abc', status: 'Pending' , requestinitdate: new Date( '2019-01-16')},
  {RequestNo: 2, Requesttitle: 'Xyz', status: 'Pending' ,  requestinitdate: new Date( '2019-01-16') },
  {RequestNo: 3, Requesttitle: 'add', status: 'Pending',  requestinitdate: new Date( '2019-01-16') },
  {RequestNo: 4, Requesttitle: 'Abc', status: 'Pending' , requestinitdate: new Date( '2019-01-16')},
  {RequestNo: 5, Requesttitle: 'Xyz', status: 'Pending' ,  requestinitdate: new Date( '2019-01-16') },
  {RequestNo: 6, Requesttitle: 'add', status: 'Pending',  requestinitdate: new Date( '2019-01-16') },
  {RequestNo: 7, Requesttitle: 'Abc', status: 'Pending' , requestinitdate: new Date( '2019-01-16')},
  {RequestNo: 8, Requesttitle: 'Xyz', status: 'Pending' ,  requestinitdate: new Date( '2019-01-16') },
  {RequestNo: 9, Requesttitle: 'add', status: 'Pending',  requestinitdate: new Date( '2019-01-16') },
  {RequestNo: 10, Requesttitle: 'Abc', status: 'Pending' , requestinitdate: new Date( '2019-01-16')},
  {RequestNo: 11, Requesttitle: 'Xyz', status: 'Pending' ,  requestinitdate: new Date( '2019-01-16') },
  {RequestNo: 12, Requesttitle: 'add', status: 'Pending',  requestinitdate: new Date( '2019-01-16') },

  {RequestNo: 13, Requesttitle: 'eqweqw', status: 'Completed' , requestinitdate: new Date( '2019-01-16') },
];
@Component({
  selector: 'app-request-table',
  templateUrl: './request-table.component.html',
  styleUrls: ['./request-table.component.css']
})
export class RequestTableComponent implements OnInit {

  displayedColumns: string[] = ['RequestNo', 'Requesttitle', 'status', 'requestinitdate' , 'view'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
