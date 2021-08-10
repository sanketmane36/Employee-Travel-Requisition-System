import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agent } from '../../agent';
import { AgentLoginService } from '../agent-login-service/agent-login.service';

@Component({
  selector: 'app-agent-login',
  templateUrl: './agent-login.component.html',
  styleUrls: ['./agent-login.component.css']
})
export class AgentLoginComponent implements OnInit {
  agent: Agent = new Agent();
  constructor(private agentLoginService: AgentLoginService, private router: Router) { }
  ngOnInit(): void {
  }
  login() {

    console.log("in login :");
    console.log(this.agent.agentId);
    console.log(this.agent.agentPassword);
    

    
    if (this.agent.agentId == null && this.agent.agentPassword == null) {
      
      alert("User ID and Password is Required");
      this.router.navigate(['agentlogin']);
    }
    else if (this.agent.agentPassword == null || this.agent.agentPassword == "") {
      alert("Password is Required");
      this.router.navigate(['agentlogin']);
    }
    else if (this.agent.agentId == null || this.agent.agentId == 0 ) {
      alert("User Id is Required");
      this.router.navigate(['agentlogin']);
    }
    else {
      this.agentLoginService.login(this.agent).subscribe(
        data => {
          console.log(data);
          this.agent = data;
          if (this.agent != null) {
            sessionStorage.setItem("agent", JSON.stringify(this.agent));
            console.log(this.agent);
            this.router.navigate(['agent']);
          }
          else if (this.agent == null)
          {
            alert("Invalid Id password");
            this.router.navigate(['agentlogin']);
          }
        }
      );
    }
  }
  onSubmit() {
    this.login();
  }
}
