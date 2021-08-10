import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingRequest } from 'src/app/booking-request/booking-request/booking-request';
import { Agent } from '../../agent';
import { ViewDocumentService } from '../view-document.service';

@Component({
  selector: 'app-view-document',
  templateUrl: './view-document.component.html',
  styleUrls: ['./view-document.component.css']
})
export class ViewDocumentComponent implements OnInit {
  bookingRequest: BookingRequest;
  bookingRequestId: number;
  result: boolean = false;

  stringifiedData: any;
  agent:Agent;

  constructor(private route: Router, private viewDocumentService: ViewDocumentService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.stringifiedData= sessionStorage.getItem("agent");
    this.agent = JSON.parse(this.stringifiedData); 
    console.log(this.agent);

    if(this.agent== null)
    {
      this.route.navigate(['agentlogin']);
    }
    this.bookingRequestId = this.router.snapshot.params['bookingRequestId'];
    // console.log(this.bookingRequestId);
    this.viewDocumentService.getSingleDocument(this.bookingRequestId).subscribe(
      data => {
        this.bookingRequest = data;
        if (this.bookingRequest.travelMedium == 'TRAIN') {
          this.result = true;
        }
        else if (this.bookingRequest.travelMedium == 'FLIGHT') {
          this.result = false;
        }
      }
    );
  }

  resubmitDocuments() {
    this.bookingRequest.status='RESUBMIT_DOCUMENTS';
    this.viewDocumentService.updateDocumentStatus(this.bookingRequest).subscribe(
      data=>{
        console.log(data);
      },error=>console.log(error) 
    );
    this.route.navigate(['agent'])
  }
 
goBack() {
  this.route.navigate(['agent'])
}
}
