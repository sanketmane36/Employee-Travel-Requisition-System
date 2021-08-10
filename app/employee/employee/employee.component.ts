import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingDetails } from 'src/app/booking-details/booking-details';
import { BookingDetailsService } from 'src/app/booking-details/booking-details.service';
import { BookingRequestService } from 'src/app/booking-request/booking-request.service';
import { BookingRequest } from 'src/app/booking-request/booking-request/booking-request';
import { Employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  bookingDetails : BookingDetails[];
  stringifiedData: any;
  employee:Employee;
  length :number;
  length1 :number;
  bookingRequestById: BookingRequest[];
  
  constructor(private router : Router,
      private bookingDetailsService : BookingDetailsService,
     private bookingRequestService : BookingRequestService) { }

  ngOnInit(): void {
    console.log("EmployeeComponent");
    //this.employeeId=this.route.snapshot.params['employeeId'];
    //console.log(this.employeeId);
    this.stringifiedData= sessionStorage.getItem("employee");
    this.employee = JSON.parse(this.stringifiedData); 
    console.log(this.employee);

   
    

    if(this.employee== null)
    {
      this.router.navigate(['employeelogin']);
    }
       
  }


  sendTravelRequest()
  {
    console.log("  sendTravelRequest() called");
    
    this.router.navigate(['bookingRequest']);

  }

  viewTravelRequestStatus(){
    console.log("  viewTravelRequestStatus() called");
    
    this.router.navigate(['bookingRequestStatus']);

  }

  viewTravelDetails(){
    console.log("  viewTravelDetails() called");
    console.log(this.employee.employeeId);
    
    this.bookingDetailsService.getBookingRequestByEmployeeId(this.employee.employeeId).subscribe(

      data=>
      {
        this.bookingDetails= data;
        console.log(data);
        
        
        console.log(this.bookingDetails);
        console.log(this.bookingDetails.length);
        this.length = this.bookingDetails.length;
        console.log(this.length);
        this.redirectToPage();
      }
    );
  }

  redirectToPage(){
    console.log("viewTravelDetails" + this.length);
    
    
    if(this.length > 0)
    {
      console.log("in if");

      sessionStorage.setItem('bookingDetails', JSON.stringify(this.bookingDetails));

      
     this.router.navigate(['bookingDetails']);
   }
   else{
     console.log("in else"); 
     alert("Data Not Found") 
   }   
  }

  logout()
  {
    sessionStorage.clear();
    this.router.navigate(['employeelogin']);
  }

  documentResubmit(){
    this.bookingRequestService.getResubmitDocuments(this.employee.employeeId).subscribe(

      data=>{
        this.bookingRequestById=data;

        this.length1 = this.bookingRequestById.length;
        console.log(this.length1);
        this.redirectToPageResubmit();
      }
    );
  }
  redirectToPageResubmit(){
    console.log("documentResubmit" + this.length1);
    
    
    if(this.length1 > 0)
    {
      console.log("in if");

      sessionStorage.setItem('bookingRequestById', JSON.stringify(this.bookingRequestById));
      console.log(this.bookingRequestById);
    
      
     this.router.navigate(['resubmitDocuments']);
   }
   else{
     console.log("in else"); 
     alert("Data Not Found") 
   }   
  }


}
