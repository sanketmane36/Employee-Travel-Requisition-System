import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingRequest } from 'src/app/booking-request/booking-request/booking-request';
import { Agent } from '../agent';
import { ShowAllRequestService } from '../show-all-request/show-all-request.service';

@Component({
  selector: 'app-single-request-details',
  templateUrl: './single-request-details.component.html',
  styleUrls: ['./single-request-details.component.css']
})
export class SingleRequestDetailsComponent implements OnInit {
  bookingRequestId: number;
  bookingRequest: BookingRequest;
  result: boolean = false;

  stringifiedData: any;
  agent:Agent;
  constructor(private router: Router, private showAllRequestService: ShowAllRequestService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.stringifiedData= sessionStorage.getItem("agent");
    this.agent = JSON.parse(this.stringifiedData); 
    console.log(this.agent);

    if(this.agent== null)
    {
      this.router.navigate(['agentlogin']);
    }
    this.reloadData();
  }
  reloadData() {
    this.bookingRequestId = this.route.snapshot.params['bookingRequestId'];
    console.log(this.bookingRequestId);

    this.showAllRequestService.getSingleRequest(this.bookingRequestId).subscribe(
      data => {
        console.log(data);
        this.bookingRequest = data;
        if (this.bookingRequest.travelMedium == this.bookingRequest.employee.slab.travelMode || this.bookingRequest.travelMedium=='TRAIN') {
          this.result = true;
        }
        else {
          this.result = false;
        }
      }
    )
  }
  document(bookingRequestId: number) {
    this.router.navigate(['/viewDocument', bookingRequestId]);
  }
  reSubmitDocument(bookingRequestId: number) {
    this.router.navigate(['/resubmit', bookingRequestId]);
  }
  slabs() {
  }
  bookTicket(bookingRequestId: number) {
    this.router.navigate(['bookTicket', bookingRequestId]);
  }
  sendRequestToDirector() {
    this.bookingRequest.status = 'REQUEST_TO_DIRECTOR';
    console.log("Send request to director");
    console.log(this.bookingRequest.status);
    console.log(this.bookingRequestId);
    this.showAllRequestService.updateBookingRequest(this.bookingRequest).subscribe(
      data => {
        console.log(data);
      }, error => console.log(error)
    );
    this.router.navigate(['/showAllRequestByManager']);
  }
  backbookingRequest() {
    this.router.navigate(['/showAllRequestByManager']);
  }

}
