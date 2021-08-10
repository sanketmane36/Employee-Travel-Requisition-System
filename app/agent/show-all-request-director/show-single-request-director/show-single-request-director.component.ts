import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingRequest } from 'src/app/booking-request/booking-request/booking-request';
import { Agent } from '../../agent';
import { ShowAllRequestService } from '../../show-all-request/show-all-request.service';

@Component({
  selector: 'app-show-single-request-director',
  templateUrl: './show-single-request-director.component.html',
  styleUrls: ['./show-single-request-director.component.css']
})
export class ShowSingleRequestDirectorComponent implements OnInit {
  bookingRequestId:number;
  bookingRequest:BookingRequest;
  stringifiedData: any;
  agent:Agent;
  constructor(private router:Router,private route:ActivatedRoute,private showAllRequestService:ShowAllRequestService) { }

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

    this.showAllRequestService.getSingleRequestDirector(this.bookingRequestId).subscribe(
      data => {
        console.log(data);
        this.bookingRequest = data;
      }
    )
  }
  document(bookingRequestId:number){
    this.router.navigate(['/viewDocument',bookingRequestId]);
  }
  backbookingRequest(){
    this.router.navigate(['/showAllRequestByDirector']);
  }
  bookTicket(bookingRequestId:number){
    this.router.navigate(['bookTicket',bookingRequestId]);
  }
}
