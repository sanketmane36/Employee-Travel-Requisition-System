import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingDetails } from 'src/app/booking-details/booking-details';

@Injectable({
  providedIn: 'root'
})
export class BookTicketService {
  private baseURL = 'http://localhost:8080/bookingDetails';
  constructor(private http:HttpClient) { }
  // getBookingRequest(bookingRequestId:number):Observable<any>{
  //   return this.http.get(`${this.baseURL}/${bookingRequestId}`);
  // }
  newBookingDetails(bookingdetails:BookingDetails):Observable<any>{
    return this.http.post(`${this.baseURL+'/newBookingDetails'}`,bookingdetails);
    
  }
}
