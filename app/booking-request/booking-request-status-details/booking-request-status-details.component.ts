import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/employee/employee/employee';
import { BookingRequestService } from '../booking-request.service';
import { BookingRequest } from '../booking-request/booking-request';
import { BookingRequestStatusDetailsService } from './booking-request-status-details.service';

@Component({
  selector: 'app-booking-request-status-details',
  templateUrl: './booking-request-status-details.component.html',
  styleUrls: ['./booking-request-status-details.component.css']
})
export class BookingRequestStatusDetailsComponent implements OnInit {

  bookingRequest : BookingRequest;

  bookingRequestId: number;

  stringifiedData: any;
  employee:Employee;
  constructor(private route: ActivatedRoute, private router: Router,
    private bookingRequestService: BookingRequestService,private  bookingRequestsStatusDetailsService : BookingRequestStatusDetailsService) { }

  ngOnInit(): void {
    this.bookingRequestId = this.route.snapshot.params['bookingRequestId'];
      console.log("in ngOnInit() BookingRequestDetailsComponent");
      console.log(this.bookingRequestId);

      this.stringifiedData= sessionStorage.getItem("employee");
      this.employee = JSON.parse(this.stringifiedData); 
      console.log(this.employee);
  
  
      if(this.employee== null)
      {
        this.router.navigate(['employeelogin']);
      }
      
  
      this.bookingRequestsStatusDetailsService.getBookingRequest(this.bookingRequestId).subscribe(
        data => {
          console.log(data);
          this.bookingRequest = data;
          console.log(this.bookingRequest);
  
        }
      )
    
    }

  bookingDetailsList()
  {
    console.log("bookingDetailsList");
    
    this.router.navigate(['bookingRequestStatus']);
  }

  }


