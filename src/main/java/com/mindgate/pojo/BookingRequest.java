package com.mindgate.pojo;

import java.util.Arrays;
import java.util.Date;

public class BookingRequest {

	private int bookingRequestId;
	private Employee employee;
	private String sourceFrom;
	private String destinationTo;
	private Date startDate;
	private Date endDate;
	private String travelMedium;
	private long aadharNo;
	private byte[] aadharPhoto;
	private long passportNo;
	private byte[] passportPhoto;
	private String status;

	public BookingRequest() {
		// TODO Auto-generated constructor stub
	}

	public BookingRequest(int bookingRequestId, Employee employee, String sourceFrom, String destinationTo,
			Date startDate, Date endDate, String travelMedium, long aadharNo, byte[] aadharPhoto, long passportNo,
			byte[] passportPhoto, String status) {
		super();
		this.bookingRequestId = bookingRequestId;
		this.employee = employee;
		this.sourceFrom = sourceFrom;
		this.destinationTo = destinationTo;
		this.startDate = startDate;
		this.endDate = endDate;
		this.travelMedium = travelMedium;
		this.aadharNo = aadharNo;
		this.aadharPhoto = aadharPhoto;
		this.passportNo = passportNo;
		this.passportPhoto = passportPhoto;
		this.status = status;
	}

	public int getBookingRequestId() {
		return bookingRequestId;
	}

	public void setBookingRequestId(int bookingRequestId) {
		this.bookingRequestId = bookingRequestId;
	}

	public Employee getEmployee() {
		return employee;
	}

	public void setEmployee(Employee employee) {
		this.employee = employee;
	}

	public String getSourceFrom() {
		return sourceFrom;
	}

	public void setSourceFrom(String sourceFrom) {
		this.sourceFrom = sourceFrom;
	}

	public String getDestinationTo() {
		return destinationTo;
	}

	public void setDestinationTo(String destinationTo) {
		this.destinationTo = destinationTo;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public String getTravelMedium() {
		return travelMedium;
	}

	public void setTravelMedium(String travelMedium) {
		this.travelMedium = travelMedium;
	}

	public long getAadharNo() {
		return aadharNo;
	}

	public void setAadharNo(long aadharNo) {
		this.aadharNo = aadharNo;
	}

	public byte[] getAadharPhoto() {
		return aadharPhoto;
	}

	public void setAadharPhoto(byte[] aadharPhoto) {
		this.aadharPhoto = aadharPhoto;
	}

	public long getPassportNo() {
		return passportNo;
	}

	public void setPassportNo(long passportNo) {
		this.passportNo = passportNo;
	}

	public byte[] getPassportPhoto() {
		return passportPhoto;
	}

	public void setPassportPhoto(byte[] passportPhoto) {
		this.passportPhoto = passportPhoto;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "BookingRequest [bookingRequestId=" + bookingRequestId + ", employee=" + employee + ", sourceFrom="
				+ sourceFrom + ", destinationTo=" + destinationTo + ", startDate=" + startDate + ", endDate=" + endDate
				+ ", travelMedium=" + travelMedium + ", aadharNo=" + aadharNo + ", aadharPhoto="
				+ Arrays.toString(aadharPhoto) + ", passportNo=" + passportNo + ", passportPhoto="
				+ Arrays.toString(passportPhoto) + ", status=" + status + "]";
	}

	

	

}
