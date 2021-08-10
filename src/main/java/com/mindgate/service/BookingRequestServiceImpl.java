package com.mindgate.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mindgate.dao.BookingRequestDAOImpl;
import com.mindgate.pojo.BookingRequest;

@Service
public class BookingRequestServiceImpl implements BookingRequestService {

	private final Logger LOGGER = LoggerFactory.getLogger(this.getClass());

	@Autowired
	BookingRequestDAOImpl bookingRequestDAOImpl;
	
	@Override
	public boolean addNewBookingRequest(BookingRequest bookingRequestId) {
		return bookingRequestDAOImpl.addNewBookingRequest(bookingRequestId);
	}

	@Override
	public boolean updateBookingRequest(BookingRequest bookingRequestId) {
		return bookingRequestDAOImpl.updateBookingRequest(bookingRequestId);
	}

	@Override
	public List<BookingRequest> getAllBookingRequest() {
		return bookingRequestDAOImpl.getAllBookingRequest();
	}

	@Override
	public BookingRequest getBookingRequest(int bookingRequestId) {
		return bookingRequestDAOImpl.getBookingRequest(bookingRequestId);
	}
	
	@Override
	public List<BookingRequest> getBookingRequestByEmployeeId(int employeeId) {
		
		return bookingRequestDAOImpl.getBookingRequestByEmployeeId(employeeId);
	}

	@Override
	public boolean deleteBookingRequest(int bookingRequestId) {
		return bookingRequestDAOImpl.deleteBookingRequest(bookingRequestId);
	}

	@Override
	public BookingRequest getRequest(int bookingRequestId) {
		return bookingRequestDAOImpl.getRequest(bookingRequestId);
	}

	@Override
	public List<BookingRequest> getBookingRequest() {
		// TODO Auto-generated method stub
		return bookingRequestDAOImpl.getBookingRequest();

	}

	@Override
	public List<BookingRequest> getBookingRequestToDirector() {
		// TODO Auto-generated method stub
		return bookingRequestDAOImpl.getBookingRequestToDirector();
	}
	
	@Override
	public List<BookingRequest> getBookingRequestForDirector() {
		// TODO Auto-generated method stub
		return bookingRequestDAOImpl.getBookingRequestForDirector();
	}
	
	@Override
	public BookingRequest getRequestDirector(int bookingRequestId) {
		// TODO Auto-generated method stub
		return bookingRequestDAOImpl.getRequestDirector(bookingRequestId);
	}

	@Override
	public List<BookingRequest> getResubmitDocuments(int employeeId) {
		
		return bookingRequestDAOImpl.getResubmitDocuments(employeeId);
	}
}
