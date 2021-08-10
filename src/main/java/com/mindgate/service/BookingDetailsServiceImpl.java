package com.mindgate.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.mindgate.dao.BookingDetailsDAO;
import com.mindgate.pojo.BookingDetails;

@Service
public class BookingDetailsServiceImpl implements BookingDetailsService {

	private final Logger LOGGER = LoggerFactory.getLogger(this.getClass());

	@Autowired
	BookingDetailsDAO bookingDetailsDAO;
	
	@Override
	public boolean addNewBookingDetails(BookingDetails bookingDetails) {
		return bookingDetailsDAO.addNewBookingDetails(bookingDetails);
	}

	@Override
	public boolean updateBookingDetails(BookingDetails bookingDetails) {
		
		return bookingDetailsDAO.updateBookingDetails(bookingDetails);
	}

	@Override
	public boolean deleteBookingDetails(int bookingDetailsId) {
		return bookingDetailsDAO.deleteBookingDetails(bookingDetailsId);
	}

	@Override
	public BookingDetails getBookingDetails(int bookingDetailsId) {
		return bookingDetailsDAO.getBookingDetails(bookingDetailsId);
	}

	@Override
	public List<BookingDetails> getAllBookingDetails() {
		return bookingDetailsDAO.getAllBookingDetails();
	}

	@Override
	public List<BookingDetails> getAllDetails(int employeeId){

		return bookingDetailsDAO.getAllDetails(employeeId);
	}

}
