package com.mindgate.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mindgate.pojo.BookingRequest;
import com.mindgate.service.BookingRequestService;


@RestController
@CrossOrigin
@RequestMapping("/bookingRequest")
public class BookingRequestController {

	

	@Autowired
	private BookingRequestService bookingRequestService;
	
	
	@RequestMapping(value = "/allBookingRequests" , method = RequestMethod.GET)
	public List<BookingRequest> getEmployees()
	{
		return bookingRequestService.getAllBookingRequest();
		
	}
	
	@RequestMapping(value= "/{bookingRequestId}" , method = RequestMethod.GET)
	public BookingRequest getEmployee(@PathVariable int bookingRequestId)
	{
		return bookingRequestService.getBookingRequest(bookingRequestId);
	}
	
	@RequestMapping(value= "/employee/{employeeId}" , method = RequestMethod.GET)
	public List<BookingRequest> getBookingRequestByEmployeeId(@PathVariable int employeeId)
	{
		return bookingRequestService.getBookingRequestByEmployeeId(employeeId);
	}
	
	
	@RequestMapping(value = "/newBookingRequest" , method = RequestMethod.POST)
	public boolean addNewBookingRequest(@RequestBody BookingRequest bookingRequest)
	{
		
		return bookingRequestService.addNewBookingRequest(bookingRequest);
	}

	
	
	@RequestMapping(value = "/updateBookingRequest" , method = RequestMethod.PUT)
	public boolean updateBookingRequest(@RequestBody BookingRequest bookingRequest)
	{
		System.out.println(bookingRequest.getStatus());
		return bookingRequestService.updateBookingRequest(bookingRequest);
		
	}
	
	@RequestMapping(value= "/{bookingRequestId}" , method = RequestMethod.DELETE)
	public boolean deleteBookingRequest(@PathVariable int bookingRequestId)
	{
	
		return bookingRequestService.deleteBookingRequest(bookingRequestId);
		
	}
	// For geting single request by condition that where status approved by manager
		@RequestMapping(value = "/allRequest", method = RequestMethod.GET)
		public List<BookingRequest> getBookingRequest() {
//			System.out.println("Get Booking request");
			return bookingRequestService.getBookingRequest();
		}

		@RequestMapping(value = "/singleRequest/{bookingRequestId}", method = RequestMethod.GET)
		public BookingRequest getRequest(@PathVariable int bookingRequestId) {
//			System.out.println("Get single Booking request");
			return bookingRequestService.getRequest(bookingRequestId);
		}
		
		
		//request to director
		@RequestMapping(value = "/allRequestToDirector", method = RequestMethod.GET)
		public List<BookingRequest> getBookingRequestToDirector() {
			return bookingRequestService.getBookingRequestToDirector();
		}
		
		//request for director
				@RequestMapping(value = "/allRequestForDirector", method = RequestMethod.GET)
				public List<BookingRequest> getBookingRequestForDirector() {
					return bookingRequestService.getBookingRequestForDirector();
				}
		
		@RequestMapping(value = "/singleRequestForDirector/{bookingRequestId}", method = RequestMethod.GET)
		public BookingRequest getRequestDirector(@PathVariable int bookingRequestId) {
			// System.out.println("Get single Booking request");
			return bookingRequestService.getRequest(bookingRequestId);
		}
		
		@RequestMapping(value= "/resubmit/{employeeId}" , method = RequestMethod.GET)
		public List<BookingRequest> getResubmitDocuments(@PathVariable int employeeId)
		{
			return bookingRequestService.getResubmitDocuments(employeeId);
		}
		
	
}