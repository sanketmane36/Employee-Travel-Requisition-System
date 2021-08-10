import { Byte } from "@angular/compiler/src/util";
import { Employee } from "src/app/employee/employee/employee";


export class BookingRequest
{
    bookingRequestId: number;
    employee: Employee;
    sourceFrom: string;
    destinationTo: string;
    startDate: Date;
    endDate: Date;
    travelMedium: string;
    aadharNo: number;
    aadharPhoto: Byte;
    passportNo: number;
    passportPhoto: Byte;
    status: string;
}