import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentLoginService {
  private baseURL = 'http://localhost:8080/login';
  constructor(private http: HttpClient) { }
  login(agent: Object): Observable<any> {
    console.log("in E-Login");
    return this.http.post(`${this.baseURL + '/agent'}`, agent);
  }
}
