import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingRequest } from './booking-request/booking-request';

@Injectable({
  providedIn: 'root'
})
export class BookingRequestService {
  private baseURL = 'http://localhost:8080/bookingRequest/';
  constructor( private http: HttpClient) { }

  sendBookingRequest(bookingRequest: BookingRequest) : Observable<any>
  {
    console.log("in sendBookingRequest" + bookingRequest);
    
    return this.http.post(this.baseURL+'newBookingRequest',bookingRequest);

  }

  updateBookingRequest(bookingRequest: BookingRequest) : Observable<any>
  {
    console.log("in sendBookingRequest");
    return this.http.put(this.baseURL+'updateBookingRequest/',bookingRequest);
    
    }

  getBookingRequestByEmployeeId(employeeId: number) : Observable<any>
  {
    return this.http.get(`${this.baseURL+'employee/'}${employeeId}`);
  }

  getBookingRequest(bookingRequestId: number) : Observable<any>
  {
    console.log("in getBookingRequest service");
    
    return this.http.get(this.baseURL+bookingRequestId);
  }
  
   getAllBookingRequest() : Observable<any>
  {
    return this.http.get(this.baseURL+'allBookingRequests');
  }

  getResubmitDocuments(employeeId: number): Observable<any>
  {
    return this.http.get(this.baseURL+'/resubmit/'+employeeId);
  }


}


