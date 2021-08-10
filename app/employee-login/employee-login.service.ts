import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeLoginService {

  private baseURL = 'http://localhost:8080/login';
  constructor(private http: HttpClient, private router :Router) {  }

  login(employee:Object) :Observable<any>{
    console.log("in E-Login");
    return this.http.post(`${this.baseURL+'/employee'}`,employee);
  }

  logout()
  {
    sessionStorage.clear();
    this.router.navigate(['employeelogin']);
  }

 


}
