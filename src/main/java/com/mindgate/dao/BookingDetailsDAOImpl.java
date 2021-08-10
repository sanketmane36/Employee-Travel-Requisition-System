package com.mindgate.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.mindgate.pojo.Agent;
import com.mindgate.pojo.BookingDetails;
import com.mindgate.pojo.BookingRequest;

@Repository
public class BookingDetailsDAOImpl implements BookingDetailsDAO {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Autowired
	AgentDAO agentDAO;

	@Autowired
	BookingRequestDAO bookingRequestDAO;

	private static String InsertBookingDetails = "insert into BOOKING_DETAILS(BOOKING_DETAILS_ID,AGENT_ID,BOOKING_REQUEST_ID,TICKET_DETAILS,HOTEL_ADDRESS) values(BOOKING_DETAILS_SEQ.NEXTVAL,?,?,?,?)";
	private static String UpdateBookingDetails = "update BOOKING_DETAILS set TICKET_DETAILS =?,TICKET_PHOTO =?,HOTEL_ADDRESS =? where BOOKING_DETAILS_ID=? ";
	private static String DeleteBookingDetails = "delete from BOOKING_DETAILS where BOOKING_DETAILS_ID =?";
	private static String GetBookingDetails = "select * from BOOKING_DETAILS where BOOKING_DETAILS_ID =?";
	private static String GetAllBookingDetails = "select * from BOOKING_DETAILS";
	private static String GetAllDetails="select * from booking_details where BOOKING_REQUEST_ID in (select BOOKING_REQUEST_ID from booking_request where STATUS ='TICKET_BOOKED' and employee_Id=?)";
			

	@Override
	public boolean addNewBookingDetails(BookingDetails bookingDetails) {
		jdbcTemplate.update(InsertBookingDetails,
				bookingDetails.getAgent().getAgentId(),
				bookingDetails.getBookingRequest().getBookingRequestId(),
				bookingDetails.getTicketDetails(),
				bookingDetails.getHotelAddress());
		return true;
	}

	@Override
	public boolean updateBookingDetails(BookingDetails bookingDetails) {
		jdbcTemplate.update(UpdateBookingDetails, bookingDetails.getTicketDetails(), bookingDetails.getTicketPhoto(),
				bookingDetails.getHotelAddress(), bookingDetails.getBookingDetailsId());
		return true;
	}

	@Override
	public boolean deleteBookingDetails(int bookingDetailsId) {
		jdbcTemplate.update(DeleteBookingDetails, bookingDetailsId);
//
		return true;
	}

	@Override
	public BookingDetails getBookingDetails(int bookingDetailsId) {
		BookingDetails bookingDetails = jdbcTemplate.queryForObject(GetBookingDetails, new BookingDetailsRowMapper(),
				bookingDetailsId);
		return bookingDetails;
	}

	@Override
	public List<BookingDetails> getAllBookingDetails() {
		List<BookingDetails> bookingDetails = jdbcTemplate.query(GetAllBookingDetails, new BookingDetailsRowMapper());


		return bookingDetails;
	}

	class BookingDetailsRowMapper implements RowMapper<BookingDetails> {
		

		@Override
		public BookingDetails mapRow(ResultSet rs, int rowNum) throws SQLException {
			BookingDetails bookingDetails = new BookingDetails();
			bookingDetails.setBookingDetailsId(rs.getInt("BOOKING_DETAILS_ID"));
			Agent agent = agentDAO.getAgent(rs.getInt("AGENT_ID"));
			bookingDetails.setAgent(agent);
			BookingRequest bookingRequest = bookingRequestDAO.getBookingRequest(rs.getInt("BOOKING_REQUEST_ID"));
			bookingDetails.setBookingRequest(bookingRequest);
			bookingDetails.setTicketDetails(rs.getString("TICKET_DETAILS"));
			bookingDetails.setTicketPhoto(rs.getBytes("TICKET_PHOTO"));
			bookingDetails.setHotelAddress(rs.getString("HOTEL_ADDRESS"));
			return bookingDetails;
		}

	}

	@Override
	public List<BookingDetails> getAllDetails(int employeeId) {
		
		List<BookingDetails> bookingDetails = jdbcTemplate.query(GetAllDetails, new BookingDetailsRowMapper(),employeeId);

		return bookingDetails;
	}

}
