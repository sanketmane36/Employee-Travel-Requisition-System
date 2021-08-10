import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingDetailsService {

  private baseURL = 'http://localhost:8080/bookingDetails';
  constructor( private http: HttpClient) { }


  getBookingRequestByEmployeeId(employeeId: number) : Observable<any>
  {
    return this.http.get(`${this.baseURL+'/employee/'}${employeeId}`);
  }



}
