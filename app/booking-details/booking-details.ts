import { Byte } from "@angular/compiler/src/util";
import { Agent } from "../agent/agent";
import { BookingRequest } from "../booking-request/booking-request/booking-request";

export class BookingDetails
{
    bookingDetailsId: number;
    agent: Agent;
    bookingRequest: BookingRequest;
    ticketDetails: string;
    ticketPhoto :Byte;
    hotelAddress :string;
}