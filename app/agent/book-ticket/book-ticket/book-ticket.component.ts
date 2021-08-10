import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingDetails } from 'src/app/booking-details/booking-details';
import { BookingRequest } from 'src/app/booking-request/booking-request/booking-request';
import { Agent } from '../../agent';
import { ShowAllRequestService } from '../../show-all-request/show-all-request.service';
import { BookTicketService } from '../book-ticket.service';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent implements OnInit {

  stringifiedData: any;
  bookingRequest: BookingRequest;
  bookingdetails: BookingDetails = new BookingDetails();
  agent: Agent;
  bookingRequestId: number;
  constructor(private route: ActivatedRoute, private router: Router,
    private bookTicketService: BookTicketService, private showAllRequestService: ShowAllRequestService) { }

  ngOnInit(): void {
    this.stringifiedData = sessionStorage.getItem("agent");
    this.agent = JSON.parse(this.stringifiedData);


    if(this.agent== null)
    {
      this.router.navigate(['agentlogin']);
    }
    this.bookingRequestId = this.route.snapshot.params['bookingRequestId'];
    console.log("requestId: " + this.bookingRequestId);
    this.showAllRequestService.getRequest(this.bookingRequestId).subscribe(
      data => {
        console.log(data);
        this.bookingRequest = data;
      }, error => console.log(error)
    );
  }
  onSubmit() {
    this.newBookingDetails();
  }
  newBookingDetails() {
    this.bookingdetails.agent = this.agent;
    this.bookingRequest.status='TICKET_BOOKED';
    this.bookingdetails.bookingRequest = this.bookingRequest;
    this.bookTicketService.newBookingDetails(this.bookingdetails).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['agent']);
      }, error => console.log(error)
    );
    this.updateBookingRequest();
  }
  updateBookingRequest() {
    this.showAllRequestService.updateBookingRequest(this.bookingRequest).subscribe(
      data => {
        console.log(data);

      }, error => console.log(error)
    );
  }

}
