import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee/employee/employee';
import { BookingRequest } from '../booking-request/booking-request';
import { AllBookingRequestsToDirectorService } from './all-booking-requests-to-director.service';

@Component({
  selector: 'app-all-booking-requests-to-director',
  templateUrl: './all-booking-requests-to-director.component.html',
  styleUrls: ['./all-booking-requests-to-director.component.css']
})
export class AllBookingRequestsToDirectorComponent implements OnInit {

  bookingRequests : BookingRequest[];
  stringifiedData: any;
  employee:Employee;

  constructor(private allBookingRequestsToDirectorService : AllBookingRequestsToDirectorService
   ,private router : Router ) { }

  ngOnInit(): void {
    this.stringifiedData= sessionStorage.getItem("employee");
    this.employee = JSON.parse(this.stringifiedData); 
    console.log(this.employee);


    if(this.employee== null)
    {
      this.router.navigate(['employeelogin']);
    }
    this.AllTravelRequest();

  }


  AllTravelRequest(){

    this.allBookingRequestsToDirectorService.getBookingRequestToDirector().subscribe(

      data=>{
        console.log(data);
        this.bookingRequests =data;
        console.log(this.bookingRequests);
        
      }, error => console.log(error)


    )
    
  }


  // list() {
  //   this.router.navigate(['agent']);
  // }

  detail(bookingRequestId:number){  
    this.router.navigate(['/singleRequestDetailsToDirector',bookingRequestId]);
  }
}
