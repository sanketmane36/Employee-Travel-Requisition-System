import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/employee/employee/employee';
import { BookingRequestService } from '../booking-request.service';
import { BookingRequest } from '../booking-request/booking-request';

@Component({
  selector: 'app-booking-request-status',
  templateUrl: './booking-request-status.component.html',
  styleUrls: ['./booking-request-status.component.css']
})
export class BookingRequestStatusComponent implements OnInit {
  employeeId:number;
  bookingRequest: BookingRequest[];
  stringifiedData: any;
  employee:Employee;

  constructor(private router: Router,private bookingRequestService: BookingRequestService, private route : ActivatedRoute) { }

  ngOnInit(): void {

    this.stringifiedData= sessionStorage.getItem("employee");
    this.employee = JSON.parse(this.stringifiedData);  
    if(this.employee== null)
    {
      this.router.navigate(['employeelogin']);
    }
    this.getBookingRequest(); 
   
  }

  getBookingRequest()
  {
    console.log("in getBookingRequest()");
    
    this.bookingRequestService.getBookingRequestByEmployeeId(this.employee.employeeId).subscribe(
        data=>{
          console.log(data);
            this.bookingRequest= data;
            
            console.log( this.bookingRequest);
            
        }
    );
  }
  requestDetails(bookingRequestId: number)
  {
    console.log("in requestDetails :: "+ bookingRequestId);
    this.router.navigate(['bookingRequestsDetails',bookingRequestId]);
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
