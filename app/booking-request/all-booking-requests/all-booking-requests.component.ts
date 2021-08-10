import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee/employee/employee';
import { BookingRequestService } from '../booking-request.service';
import { BookingRequest } from '../booking-request/booking-request';

@Component({
  selector: 'app-all-booking-requests',
  templateUrl: './all-booking-requests.component.html',
  styleUrls: ['./all-booking-requests.component.css']
})
export class AllBookingRequestsComponent implements OnInit {
  bookingRequests: BookingRequest[];
  stringifiedData: any;
  employee:Employee;

  constructor(private bookingRequestService :  BookingRequestService, 
    private router: Router) { }

  ngOnInit(): void {
    this.stringifiedData= sessionStorage.getItem("employee");
    this.employee = JSON.parse(this.stringifiedData); 
    console.log(this.employee);


    if(this.employee== null)
    {
      this.router.navigate(['employeelogin']);
    }
    this.getAllBookingRequest();
    
  }

  getAllBookingRequest()
  {
    this.bookingRequestService.getAllBookingRequest().subscribe(
      data=>
      {
        console.log(data);
        
        this.bookingRequests=data;
        
      },error => console.log(error)
    );

  }

  requestDetails(bookingRequestId: number)
  {
    console.log("in requestDetails :: "+ bookingRequestId);
    this.router.navigate(['allBookingRequestsDetails',bookingRequestId]);
  }

  back(){
    
    if (this.employee.slab.designation == 'DIRECTOR') {
      this.router.navigate(['director']);
    }
    else if (this.employee.slab.designation == 'PROJECT_MANAGER') {
      this.router.navigate(['manager']);
    }
    else if(this.employee.slab.designation != null) {
      this.router.navigate(['employee']);
    }
  }


}
