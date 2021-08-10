import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee/employee/employee';
import { EmployeeLoginService } from '../employee-login.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  employee: Employee = new Employee();
  constructor(private employeeLoginService: EmployeeLoginService, private router: Router) { }

  ngOnInit(): void {
    
  }
  


  login() {
    console.log("in login :");
    if(this.employee.employeePassword==null && this.employee.employeeId== null)
    {
      alert("User ID and Password is Required");
    }
    else if(this.employee.employeePassword==null || this.employee.employeePassword == "")
    {
      alert("Password is Required");
    }
    else if(this.employee.employeeId==null || this.employee.employeeId == 0)
    {
      alert("User Id is Required")
    }
    else
    {
      this.employeeLoginService.login(this.employee).subscribe(
        data => {
          this.employee = data;
          console.log(this.employee);
          console.log(this.employee.slab);
          console.log(this.employee.slab.designation);
  
          if(this.employee.firstName != null){
  
          sessionStorage.setItem('employee', JSON.stringify(this.employee));
          
  
          if (this.employee.slab.designation == 'DIRECTOR') {
            this.router.navigate(['director']);
          }
          else if (this.employee.slab.designation == 'PROJECT_MANAGER') {
            this.router.navigate(['manager']);
          }
          else if(this.employee.slab.designation != null) {
            this.router.navigate(['employee']);
          }
  
        }
        else if(this.employee.firstName== null){
          alert("Invalid Id password");
          this.router.navigate(['employeelogin']);
        }
        }, error => console.log(error)
        
      ); 
    }
 
       
  }
 

  onSubmit() {
    this.login();
  }



}
