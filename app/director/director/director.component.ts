import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee/employee/employee';
@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.css']
})
export class DirectorComponent implements OnInit {

  stringifiedData: any;
  employee:Employee;

  constructor(private router :Router) { }

  ngOnInit(): void {
    this.stringifiedData= sessionStorage.getItem("employee");
    this.employee = JSON.parse(this.stringifiedData); 
    console.log(this.employee);


    if(this.employee== null)
    {
      this.router.navigate(['employeelogin']);
    }
    else if(this.employee.slab.designation !="DIRECTOR")
    {
      this.router.navigate(['employeelogin']);
    }
  }


  AllTravelRequest(){

    this.router.navigate(['allRequestToDirector']);
  }

  logout()
  {
    sessionStorage.clear();
    this.router.navigate(['employeelogin']);
  }

}
