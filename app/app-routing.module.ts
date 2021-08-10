import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentLoginComponent } from './agent/agent-login/agent-login/agent-login.component';
import { AgentComponent } from './agent/agent/agent.component';
import { BookTicketComponent } from './agent/book-ticket/book-ticket/book-ticket.component';
import { ShowAllRequestDirectorComponent } from './agent/show-all-request-director/show-all-request-director/show-all-request-director.component';
import { ShowSingleRequestDirectorComponent } from './agent/show-all-request-director/show-single-request-director/show-single-request-director.component';
import { ShowAllRequestComponent } from './agent/show-all-request/show-all-request/show-all-request.component';
import { SingleRequestDetailsComponent } from './agent/single-request-details/single-request-details.component';
import { ViewBookedTicketsComponent } from './agent/view-booked-tickets/view-booked-tickets/view-booked-tickets.component';
import { ViewDocumentComponent } from './agent/view-documents/view-document/view-document.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { AllBookingRequestsDetailsComponent } from './booking-request/all-booking-requests-details/all-booking-requests-details.component';
import { AllBookingRequestsToDirectorComponent } from './booking-request/all-booking-requests-to-director/all-booking-requests-to-director.component';
import { AllBookingRequestsComponent } from './booking-request/all-booking-requests/all-booking-requests.component';
import { BookingRequestStatusDetailsComponent } from './booking-request/booking-request-status-details/booking-request-status-details.component';
import { BookingRequestStatusComponent } from './booking-request/booking-request-status/booking-request-status.component';
import { BookingRequestComponent } from './booking-request/booking-request/booking-request.component';
import { ResubmitDocumentsComponent } from './booking-request/resubmit-documents/resubmit-documents.component';
import { ResubmittedDocumentsComponent } from './booking-request/resubmitted-documents/resubmitted-documents.component';
import { SingleRequestDetailsToDirectorComponent } from './booking-request/single-request-details-to-director/single-request-details-to-director.component';
import { DirectorComponent } from './director/director/director.component';
import { EmployeeLoginComponent } from './employee-login/employee-login/employee-login.component';
import { EmployeeComponent } from './employee/employee/employee.component';
import { HomeComponent } from './home/home/home.component';
import { ManagerComponent } from './manager/manager/manager.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },

  { path: 'employeelogin', component: EmployeeLoginComponent },
  { path: 'employee', component: EmployeeComponent },


  { path: 'director', component: DirectorComponent },
  { path: 'manager', component: ManagerComponent },


  { path: 'agentlogin', component: AgentLoginComponent },
  { path: 'agent', component: AgentComponent },

  { path: 'bookingRequest', component: BookingRequestComponent },
  { path: 'bookingRequestStatus', component: BookingRequestStatusComponent },
  { path: 'allBookingRequests', component: AllBookingRequestsComponent },

  { path: 'bookingDetails', component: BookingDetailsComponent },

  {path : 'allBookingRequestsDetails/:bookingRequestId' , component : AllBookingRequestsDetailsComponent},
  {path :'bookingRequestsDetails/:bookingRequestId', component: BookingRequestStatusDetailsComponent},

  {path : 'allRequestToDirector' , component: AllBookingRequestsToDirectorComponent},
  { path: 'singleRequestDetailsToDirector/:bookingRequestId', component:  SingleRequestDetailsToDirectorComponent},


  { path: 'showAllRequestByManager', component: ShowAllRequestComponent },
  { path: 'singleRequestDetails/:bookingRequestId', component: SingleRequestDetailsComponent },

  {path:'viewBookedTickets', component:ViewBookedTicketsComponent},
  { path: 'viewDocument/:bookingRequestId', component: ViewDocumentComponent },
  { path: 'bookTicket/:bookingRequestId', component: BookTicketComponent },
  { path: 'singleRequestDetailsDirector/:bookingRequestId', component: ShowSingleRequestDirectorComponent },
  { path: 'showAllRequestByDirector', component: ShowAllRequestDirectorComponent },

  { path: 'resubmitDocuments' ,component: ResubmitDocumentsComponent},

  {path : 'resubmittedDocuments/:bookingRequestId' , component : ResubmittedDocumentsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
