import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingRequest } from 'src/app/booking-request/booking-request/booking-request';

@Injectable({
  providedIn: 'root'
})
export class ViewDocumentService {
  private baseURL = 'http://localhost:8080/bookingRequest';
  constructor(private http: HttpClient) { }
  getSingleDocument(bookingRequestId: number): Observable<any> {
    console.log("reload data service");
    return this.http.get(this.baseURL +'/'+ bookingRequestId);
  }

  updateDocumentStatus(bookingRequest:BookingRequest): Observable<any>{
    return this.http.put(this.baseURL+'/updateBookingRequest',bookingRequest)

  }
}
