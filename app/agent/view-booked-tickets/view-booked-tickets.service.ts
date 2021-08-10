import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingDetails } from 'src/app/booking-details/booking-details';

@Injectable({
  providedIn: 'root'
})
export class ViewBookedTicketsService {
  bookingDetails:BookingDetails;
  private baseURL = 'http://localhost:8080/bookingDetails/';

  constructor(private http:HttpClient) { }
  viewTickets(): Observable<any>{
    return this.http.get(this.baseURL + '/allBookingDetails');
  }
}
