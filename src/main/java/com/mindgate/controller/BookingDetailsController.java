package com.mindgate.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mindgate.pojo.BookingDetails;
import com.mindgate.service.BookingDetailsService;


@RestController
@CrossOrigin
@RequestMapping("/bookingDetails")
public class BookingDetailsController {

	@Autowired
	private BookingDetailsService bookingDetailsService;
	
	
	@RequestMapping(value = "/allBookingDetails" , method = RequestMethod.GET)
	public List<BookingDetails> getAllBookingDetails()
	{
		return bookingDetailsService.getAllBookingDetails();
		
	}
	
	@RequestMapping(value= "/{bookingDetailsId}" , method = RequestMethod.GET)
	public BookingDetails getBookingDetails(@PathVariable int bookingDetailsId)
	{
		return bookingDetailsService.getBookingDetails(bookingDetailsId);
	}
	
	
	@RequestMapping(value = "/newBookingDetails" , method = RequestMethod.POST)
	public boolean addNewBookingDetails(@RequestBody BookingDetails bookingDetails)
	{
		
		return bookingDetailsService.addNewBookingDetails(bookingDetails);
	}
	
	@RequestMapping(value = "/updateBookingDetails" , method = RequestMethod.PUT)
	public boolean updateBookingDetails(@RequestBody BookingDetails bookingDetails)
	{
		
		return bookingDetailsService.updateBookingDetails(bookingDetails);
		
	}
	
	@RequestMapping(value= "/{bookingDetailsId}" , method = RequestMethod.DELETE)
	public boolean deleteBookingDetails(@PathVariable int bookingDetailsId)
	{
	
		return bookingDetailsService.deleteBookingDetails(bookingDetailsId);
		
	}
	
	@RequestMapping(value= "employee/{employeeId}" , method = RequestMethod.GET)
	public List<BookingDetails> getAllDetails(@PathVariable int employeeId)
	{
		return bookingDetailsService.getAllDetails(employeeId);
	}
	
	
}