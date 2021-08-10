import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllBookingRequestsToDirectorService {
  private baseURL = 'http://localhost:8080/bookingRequest';

  constructor(private http: HttpClient) { }
  getBookingRequestToDirector() : Observable<any>{
    console.log("in getBookingRequestToDirector of service");
    return this.http.get(this.baseURL+'/allRequestToDirector');
  }


  // getSingleRequest(bookingRequestId:number) : Observable<any>{
  //   console.log("reload data service");
  //   return this.http.get(this.baseURL+'/singleRequest/'+bookingRequestId);
  // }
}
