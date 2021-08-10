import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingDetails } from 'src/app/booking-details/booking-details';
import { Agent } from '../../agent';
import { ViewBookedTicketsService } from '../view-booked-tickets.service';

@Component({
  selector: 'app-view-booked-tickets',
  templateUrl: './view-booked-tickets.component.html',
  styleUrls: ['./view-booked-tickets.component.css']
})
export class ViewBookedTicketsComponent implements OnInit {

  bookingDetails: BookingDetails[];

  stringifiedData: any;
  agent:Agent;
  constructor(private router: Router, private viewBookedTickets: ViewBookedTicketsService) { }

  ngOnInit(): void {
    this.stringifiedData= sessionStorage.getItem("agent");
    this.agent = JSON.parse(this.stringifiedData); 
    console.log(this.agent);

    if(this.agent== null)
    {
      this.router.navigate(['agentlogin']);
    }
    this.viewBookedTickets.viewTickets().subscribe(
      data => {
        console.log(data);
        this.bookingDetails = data;
        console.log(this.bookingDetails);
      }
    );
  }
  backAgentDashBoard() {
    this.router.navigate(['/agent'])
  }

}
