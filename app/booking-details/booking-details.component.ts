import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee/employee/employee';
import { BookingDetails } from './booking-details';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {

  bookingDetails : BookingDetails[];
  stringifiedData: any;
  stringifiedData2: any;
  employee:Employee;
  constructor(private router : Router) { }

  ngOnInit(): void {

    this.stringifiedData= sessionStorage.getItem("bookingDetails");
    this.bookingDetails = JSON.parse(this.stringifiedData); 
    console.log(this.bookingDetails);

    this.stringifiedData2= sessionStorage.getItem("employee");
    this.employee = JSON.parse(this.stringifiedData); 
    console.log(this.employee);

    if(this.employee== null)
    {
      this.router.navigate(['employeelogin']);
    }
    
  }

}
