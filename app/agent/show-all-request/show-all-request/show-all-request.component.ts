import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingRequest } from 'src/app/booking-request/booking-request/booking-request';
import { Agent } from '../../agent';
import { ShowAllRequestService } from '../show-all-request.service';

@Component({
  selector: 'app-show-all-request',
  templateUrl: './show-all-request.component.html',
  styleUrls: ['./show-all-request.component.css']
})
export class ShowAllRequestComponent implements OnInit {
  bookingRequest: BookingRequest[];
  stringifiedData: any;
  agent:Agent;
  constructor(private showAllRequestService: ShowAllRequestService, private router: Router) { }
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
    console.log("Reload data");
    this.showAllRequestService.getRequestList().subscribe(
      data => {
        this.bookingRequest = data;
        this.bookingRequest.forEach(element => {
          console.log(element);
        });
      }
    )
  }
  list() {
    this.router.navigate(['agent']);
  }
  detail(bookingRequestId: number) {
    this.router.navigate(['/singleRequestDetails', bookingRequestId]);
  }

}
