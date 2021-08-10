import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/employee/employee/employee';



import { BookingRequestService } from '../booking-request.service';
import { BookingRequest } from '../booking-request/booking-request';
import { AllBookingRequestsDetailsService } from './all-booking-requests-details.service';

@Component({
  selector: 'app-all-booking-requests-details',
  templateUrl: './all-booking-requests-details.component.html',
  styleUrls: ['./all-booking-requests-details.component.css']
})
export class AllBookingRequestsDetailsComponent implements OnInit {

  result:boolean;
  bookingRequest: BookingRequest;

  bookingRequestId: number;

  stringifiedData: any;
  employee:Employee;



  constructor(private route: ActivatedRoute, private router: Router,
    private bookingRequestService: BookingRequestService, private allBookingRequestsDetailsService: AllBookingRequestsDetailsService) { }


  ngOnInit(): void {

    this.stringifiedData= sessionStorage.getItem("employee");
    this.employee = JSON.parse(this.stringifiedData); 
    console.log(this.employee);


    if(this.employee== null)
    {
      this.router.navigate(['employeelogin']);
    }
    this.reloadData();
  }

  reloadData() {
    this.bookingRequestId = this.route.snapshot.params['bookingRequestId'];
    console.log(this.bookingRequestId);
    
    this.bookingRequestService.getBookingRequest(this.bookingRequestId).subscribe(

      data=>{

        console.log(data);
        this.bookingRequest= data;
        console.log(this.bookingRequest);
   
        if (this.bookingRequest.travelMedium == this.bookingRequest.employee.slab.travelMode || this.bookingRequest.travelMedium=='TRAIN') {
          this.result = true;
        }
        else {
          this.result = false;
        }

      },error=>console.log(error)
    );
   
   
  }

  bookingDetailsList() {
    console.log("bookingDetailsList");

    this.router.navigate(['allBookingRequests']);
  }

  sendRequestToAgent() {
    console.log("sendRequestToAgent");
    
    console.log(this.bookingRequest);
    this.bookingRequestService.updateBookingRequest(this.bookingRequest).subscribe(data => { console.log(data) }, error => console.log(error)
    );

    alert("Request Send Successfully To Agent");
    this.bookingDetailsList();


  }

}
