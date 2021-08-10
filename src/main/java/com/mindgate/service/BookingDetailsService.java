package com.mindgate.service;

import java.util.List;

import com.mindgate.pojo.BookingDetails;

public interface BookingDetailsService {


	public boolean addNewBookingDetails(BookingDetails bookingDetails);

	public boolean updateBookingDetails(BookingDetails bookingDetails);

	public boolean deleteBookingDetails(int bookingDetailsId);

	public BookingDetails getBookingDetails(int bookingDetailsId);

	public List<BookingDetails> getAllBookingDetails();
	
	public List<BookingDetails> getAllDetails(int employeeId);
}
