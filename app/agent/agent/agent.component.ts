import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agent } from '../agent';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {
  stringifiedData: any;
  agent: Agent;
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.stringifiedData = sessionStorage.getItem("agent");
    this.agent = JSON.parse(this.stringifiedData);
    console.log(this.agent);
    if (this.agent == null) {
      this.router.navigate(['agentlogin']);
    }
  }
  showAllRequestsByManager() {
    this.router.navigate(['/showAllRequestByManager'])
  }
  showAllRequestsByDirector() {
    this.router.navigate(['/showAllRequestByDirector'])
  }
  viewBookedTickets() {
    this.router.navigate(['/viewBookedTickets'])
  }
  logout() {
    sessionStorage.clear();
    this.router.navigate(['agentlogin']);
  }
}
