import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingRequest } from 'src/app/booking-request/booking-request/booking-request';
import { Agent } from '../../agent';
import { ShowAllRequestService } from '../../show-all-request/show-all-request.service';

@Component({
  selector: 'app-show-all-request-director',
  templateUrl: './show-all-request-director.component.html',
  styleUrls: ['./show-all-request-director.component.css']
})
export class ShowAllRequestDirectorComponent implements OnInit {

  bookingRequest:BookingRequest[];
  stringifiedData: any;
  agent:Agent;
  constructor(private router:Router,private showAllRequestService:ShowAllRequestService) { }

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
    this.showAllRequestService.getRequestDirectorList().subscribe(
      data=>{
        this.bookingRequest=data;
        this.bookingRequest.forEach(element=>{
          console.log(element);    
        });
      }
    )
  }
  detailsOfRequest(bookingRequestId:number)
  {
    this.router.navigate(['/singleRequestDetailsDirector',bookingRequestId])
  }
}
