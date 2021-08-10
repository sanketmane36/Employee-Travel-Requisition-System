import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/employee/employee/employee';
import { BookingRequestService } from '../booking-request.service';
import { BookingRequest } from '../booking-request/booking-request';

@Component({
  selector: 'app-resubmitted-documents',
  templateUrl: './resubmitted-documents.component.html',
  styleUrls: ['./resubmitted-documents.component.css']
})
export class ResubmittedDocumentsComponent implements OnInit {

  showaadhar:boolean;
  showpassport:boolean;

  stringifiedData: any;
  bookingRequest:BookingRequest[];
  bookingRequest1:BookingRequest;

  employee: Employee;
  stringifiedData2: any;
  bookingRequestId:number;
  constructor(private router:Router,private route:ActivatedRoute,private bookingRequestService : BookingRequestService) { }

  ngOnInit(): void {
    this.showaadhar=false;
    this.showpassport=false;
    this.bookingRequestId = this.route.snapshot.params['bookingRequestId'];

    this.stringifiedData= sessionStorage.getItem("bookingRequestById");
    this.bookingRequest = JSON.parse(this.stringifiedData); 
    console.log(this.bookingRequest);

    this.stringifiedData2= sessionStorage.getItem("employee");
    this.employee = JSON.parse(this.stringifiedData2); 
    console.log(this.employee);
    this.bookingRequest.forEach(element => {
      if(element.bookingRequestId=this.bookingRequestId)
      {
        this.bookingRequest1= element;
      }
    });

    if(this.bookingRequest1.travelMedium== 'TRAIN')
    {
      this.showaadhar=true;
    }
    else if(this.bookingRequest1.travelMedium== 'FLIGHT')
    {
      this.showaadhar=true;
      this.showpassport=true;
    }

    if(this.employee== null)
    {
      this.router.navigate(['employeelogin']);
    }
  }
  submit(){

    console.log("insubmit");
    this.bookingRequest1.status="DOCUMENT_VERIFIED";
    this.bookingRequestService.updateBookingRequest(this.bookingRequest1).subscribe();
    if(this.bookingRequest1.employee.slab.designation=="PROJECT_MANAGER")
    {
      this.router.navigate(['manager']);

    }
    else
    {
      this.router.navigate(['employee']);

    }
    
  }

}
