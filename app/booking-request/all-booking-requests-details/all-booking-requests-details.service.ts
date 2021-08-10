import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllBookingRequestsDetailsService {

  private baseURL = 'http://localhost:8080/bookingRequest/';

  constructor(private http: HttpClient) { }

  getBookingRequest(bookingRequestId: number): Observable<any>
  {
    console.log("in getBookingRequest");
    return this.http.get(this.baseURL+bookingRequestId);
  }

}
