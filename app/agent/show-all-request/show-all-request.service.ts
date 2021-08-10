import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowAllRequestService {

  private baseURL = 'http://localhost:8080/bookingRequest/';
  constructor(private http: HttpClient) { }
  getRequestList(): Observable<any> {
    console.log("reload data service");
    return this.http.get(this.baseURL + 'allRequest');
  }
  getSingleRequest(bookingRequestId: number): Observable<any> {
    console.log("reload data service");
    return this.http.get(this.baseURL + 'singleRequest/' + bookingRequestId);
  }
  getRequestDirectorList(): Observable<any> {
    console.log("reload into getRequestBy Director");
    return this.http.get(this.baseURL + 'allRequestForDirector');
  }
  getSingleRequestDirector(bookingRequestId: number): Observable<any> {
    console.log("reload data service"); 
    return this.http.get(this.baseURL + bookingRequestId);
  }
  getRequest(bookingRequestId: number): Observable<any> {
    console.log("reload data service");
    return this.http.get(this.baseURL + bookingRequestId);
  }
  updateBookingRequest(bookingRequest: any): Observable<any> {
    console.log("in sendBookingRequest");
    return this.http.put(this.baseURL + 'updateBookingRequest', bookingRequest);
  }
}
