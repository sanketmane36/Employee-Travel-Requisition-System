package com.mindgate.pojo;

import java.util.Arrays;


public class BookingDetails 
{
	private int bookingDetailsId;

	private Agent agent;
	
	private BookingRequest bookingRequest;
	private String ticketDetails;
	private byte[] ticketPhoto;
	private String hotelAddress;
	
	public BookingDetails() {
		// TODO Auto-generated constructor stub
	}

	public BookingDetails(int bookingDetailsId, Agent agent, BookingRequest bookingRequest, String ticketDetails,
			byte[] ticketPhoto, String hotelAddress) {
		super();
		this.bookingDetailsId = bookingDetailsId;
		this.agent = agent;
		this.bookingRequest = bookingRequest;
		this.ticketDetails = ticketDetails;
		this.ticketPhoto = ticketPhoto;
		this.hotelAddress = hotelAddress;
	}

	public int getBookingDetailsId() {
		return bookingDetailsId;
	}

	public void setBookingDetailsId(int bookingDetailsId) {
		this.bookingDetailsId = bookingDetailsId;
	}

	public Agent getAgent() {
		return agent;
	}

	public void setAgent(Agent agent) {
		this.agent = agent;
	}

	public BookingRequest getBookingRequest() {
		return bookingRequest;
	}

	public void setBookingRequest(BookingRequest bookingRequest) {
		this.bookingRequest = bookingRequest;
	}

	public String getTicketDetails() {
		return ticketDetails;
	}

	public void setTicketDetails(String ticketDetails) {
		this.ticketDetails = ticketDetails;
	}

	public byte[] getTicketPhoto() {
		return ticketPhoto;
	}

	public void setTicketPhoto(byte[] ticketPhoto) {
		this.ticketPhoto = ticketPhoto;
	}

	public String getHotelAddress() {
		return hotelAddress;
	}

	public void setHotelAddress(String hotelAddress) {
		this.hotelAddress = hotelAddress;
	}

	@Override
	public String toString() {
		return "BookingDetails [bookingDetailsId=" + bookingDetailsId + ", agent=" + agent + ", bookingRequest="
				+ bookingRequest + ", ticketDetails=" + ticketDetails + ", ticketPhoto=" + Arrays.toString(ticketPhoto)
				+ ", hotelAddress=" + hotelAddress + "]";
	}

}
