import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee/employee/employee';
import { BookingRequest } from '../booking-request/booking-request';

@Component({
  selector: 'app-resubmit-documents',
  templateUrl: './resubmit-documents.component.html',
  styleUrls: ['./resubmit-documents.component.css']
})
export class ResubmitDocumentsComponent implements OnInit {

  bookingRequestById : BookingRequest[];
  stringifiedData: any;
  stringifiedData2: any;
  employee:Employee;
  constructor(private router : Router) { }

  ngOnInit(): void {


    this.stringifiedData= sessionStorage.getItem('bookingRequestById');
    this.bookingRequestById = JSON.parse(this.stringifiedData); 
    console.log(this.bookingRequestById);

    this.stringifiedData2= sessionStorage.getItem("employee");
    this.employee = JSON.parse(this.stringifiedData2); 
    console.log(this.employee);

    if(this.employee== null)
    {
      this.router.navigate(['employeelogin']);
    }
    
  }

  resubmitted(bookingRequestId :number){
    this.router.navigate(['resubmittedDocuments',bookingRequestId]);
  }

}
