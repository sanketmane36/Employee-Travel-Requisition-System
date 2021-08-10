import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TravelRequisition';

  // stringifiedData: any;
  // employee:Employee;

  // stringifiedData2: any;
  // agent : Agent;

  // emp:boolean;

  // constructor(private router : Router)
  // {
  // }
  // ngOnInit(): void {
  //   this.emp=false;

  //   this.stringifiedData= sessionStorage.getItem("employee");
  //   this.employee = JSON.parse(this.stringifiedData); 
  //   console.log(this.employee.firstName);
    
  //   if(this.employee != null)
  //   {
  //     this.emp=true;
  //   }
    

  //   this.stringifiedData2= sessionStorage.getItem("agent");
  //   this.agent = JSON.parse(this.stringifiedData); 
  //   console.log(this.agent+"YYYYYYYYYYYYYYYYYYYYYYYYYYY");
    
  //   // if(this.employee== null)
  //   // {
  //   //   this.router.navigate(['employeelogin']);
  //   // }
       
  // }


  // logout()
  // {
  //   console.log("lllllllllllllllllllllllllllllllll");
    
  //   sessionStorage.clear();
  //   this.router.navigate(['employeelogin']);
  // }
}
