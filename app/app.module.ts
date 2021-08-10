import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EmployeeLoginComponent } from './employee-login/employee-login/employee-login.component';
import { EmployeeComponent } from './employee/employee/employee.component';
import { ManagerComponent } from './manager/manager/manager.component';
import { DirectorComponent } from './director/director/director.component';
import { AgentLoginComponent } from './agent/agent-login/agent-login/agent-login.component';
import { EmployeeLoginService } from './employee-login/employee-login.service';
import { AgentLoginService } from './agent/agent-login/agent-login-service/agent-login.service';
import { HomeComponent } from './home/home/home.component';
import { AgentComponent } from './agent/agent/agent.component';
import { BookingRequestComponent } from './booking-request/booking-request/booking-request.component';
import { BookingRequestService } from './booking-request/booking-request.service';
import { BookingRequestStatusComponent } from './booking-request/booking-request-status/booking-request-status.component';
import { AllBookingRequestsComponent } from './booking-request/all-booking-requests/all-booking-requests.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { BookingRequestStatusDetailsComponent } from './booking-request/booking-request-status-details/booking-request-status-details.component';
import { AllBookingRequestsDetailsComponent } from './booking-request/all-booking-requests-details/all-booking-requests-details.component';
import { ShowAllRequestComponent } from './agent/show-all-request/show-all-request/show-all-request.component';
import { SingleRequestDetailsComponent } from './agent/single-request-details/single-request-details.component';
import { AllBookingRequestsToDirectorComponent } from './booking-request/all-booking-requests-to-director/all-booking-requests-to-director.component';
import { SingleRequestDetailsToDirectorComponent } from './booking-request/single-request-details-to-director/single-request-details-to-director.component';
import { BookTicketComponent } from './agent/book-ticket/book-ticket/book-ticket.component';
import { ShowAllRequestDirectorComponent } from './agent/show-all-request-director/show-all-request-director/show-all-request-director.component';
import { ShowSingleRequestDirectorComponent } from './agent/show-all-request-director/show-single-request-director/show-single-request-director.component';
import { ViewBookedTicketsComponent } from './agent/view-booked-tickets/view-booked-tickets/view-booked-tickets.component';
import { ViewDocumentComponent } from './agent/view-documents/view-document/view-document.component';
import { ResubmitDocumentsComponent } from './booking-request/resubmit-documents/resubmit-documents.component';
import { ResubmittedDocumentsComponent } from './booking-request/resubmitted-documents/resubmitted-documents.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeLoginComponent,
    EmployeeComponent,
    ManagerComponent,
    DirectorComponent,
    AgentLoginComponent,
    HomeComponent,
    AgentComponent,
    BookingRequestComponent,
    BookingRequestStatusComponent,
    AllBookingRequestsComponent,
    BookingDetailsComponent,
    BookingRequestStatusDetailsComponent,
    AllBookingRequestsDetailsComponent,
    ShowAllRequestComponent,
    SingleRequestDetailsComponent,
    AllBookingRequestsToDirectorComponent,
    SingleRequestDetailsToDirectorComponent,
    BookTicketComponent,
    ShowAllRequestDirectorComponent,
    ShowSingleRequestDirectorComponent,
    ViewBookedTicketsComponent,
    ViewDocumentComponent,
    ResubmitDocumentsComponent,
    ResubmittedDocumentsComponent
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [EmployeeLoginService,AgentLoginService,BookingRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
