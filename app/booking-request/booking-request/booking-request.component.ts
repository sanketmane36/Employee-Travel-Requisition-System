import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/employee/employee/employee';
import { BookingRequestService } from '../booking-request.service';
import { BookingRequest } from './booking-request';

@Component({
  selector: 'app-booking-request',
  templateUrl: './booking-request.component.html',
  styleUrls: ['./booking-request.component.css']
})
export class BookingRequestComponent implements OnInit {

  bookingRequest: BookingRequest = new BookingRequest();

  employee: Employee;
  stringifiedData: any;

  showaadhar: boolean;
  showpassport: boolean;

  constructor(private router: Router, private bookingRequestService: BookingRequestService) { }

  ngOnInit(): void {
    this.stringifiedData = sessionStorage.getItem("employee");
    this.employee = JSON.parse(this.stringifiedData);

    if (this.employee == null) {
      this.router.navigate(['employeelogin']);
    }
  }


  onOptionsSelected(value: string) {
    this.showaadhar = false;
    this.showpassport = false;
    console.log("the selected value is " + value);
    if (value == 'TRAIN') {
      this.showaadhar = true;
    }
    if (value == 'FLIGHT') {
      this.showaadhar = true;
      this.showpassport = true;
    }
  }



  onSubmit() {

    this.bookingRequest.employee = this.employee;

    this.bookingRequestService.sendBookingRequest(this.bookingRequest).subscribe(
      data => {
        console.log(data);

      }, error => console.log(error)
    );

    console.log(this.employee.employeeId);

    console.log(this.bookingRequest + "line number 42");
    console.log(this.employee);
    console.log(this.bookingRequest.employee.slab.designation);



    if (this.bookingRequest.employee.slab.designation == 'PROJECT_MANAGER') {
      this.router.navigate(['manager']);

    }
    else if (this.bookingRequest.employee.slab.designation != null) {
      this.router.navigate(['employee']);
    }

  }

}
