package com.mindgate.service;

import java.util.List;

import com.mindgate.pojo.BookingRequest;

public interface BookingRequestService {
	public boolean addNewBookingRequest(BookingRequest bookingRequestId);

	public boolean updateBookingRequest(BookingRequest bookingRequestId);

	public List<BookingRequest> getAllBookingRequest();

	public BookingRequest getBookingRequest(int bookingRequestId);

	public List<BookingRequest> getBookingRequestByEmployeeId(int employeeId);

	public boolean deleteBookingRequest(int bookingRequestId);

	public BookingRequest getRequest(int bookingRequestId);

	public List<BookingRequest> getBookingRequest();
	
	public List<BookingRequest> getBookingRequestToDirector();
	
	public List<BookingRequest> getBookingRequestForDirector();

	
	public BookingRequest getRequestDirector(int bookingRequestId);
	
	public List<BookingRequest> getResubmitDocuments(int employeeId);
	
	


}
