
package com.mindgate.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.mindgate.pojo.BookingRequest;
import com.mindgate.pojo.Employee;

@Repository
public class BookingRequestDAOImpl implements BookingRequestDAO {
	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Autowired
	private EmployeeDAO employeeDAO;

	private final Logger LOGGER = LoggerFactory.getLogger(this.getClass());

	private static String INSERTBOOKINGREQUEST = "insert into BOOKING_REQUEST(BOOKING_REQUEST_ID,EMPLOYEE_ID,SOURCE_FROM,DESTINATION_TO,START_DATE,END_DATE,TRAVEL_MEDIUM,AADHAR_NO,PASSPORT_NO,STATUS) values(BOOKING_REQUEST_SEQ.NEXTVAL,?,?,?,?,?,?,?,?,DEFAULT)";
	private static String UPDATEBOOKINGREQUEST = "update BOOKING_REQUEST set SOURCE_FROM=?, DESTINATION_TO=?, START_DATE= ?,END_DATE = ?,TRAVEL_MEDIUM  =?, STATUS=? where BOOKING_REQUEST_ID =?";
	private static String GETALLBOOKINGREQUEST = "select * from BOOKING_REQUEST where status='REQUEST_PENDING'";
	private static String GETBOOKINGREQUEST = "select * from BOOKING_REQUEST where BOOKING_REQUEST_ID=?";

	private static String DELETEBOOKINGREQUEST = "delete from BOOKING_REQUEST where BOOKING_REQUEST_ID=? ";
	private static String GETBOOKINGREQUESTBYEMPLOYEEID = "select * from BOOKING_REQUEST where EMPLOYEE_ID=?";

	private static String GETSINGLEBOOKINGREQUEST = "SELECT * FROM BOOKING_REQUEST WHERE BOOKING_REQUEST_ID =? and status='APPROVED_BY_MANAGER'";
	// approved by manager
	private static String GETAllRECORD = "SELECT * FROM BOOKING_REQUEST WHERE status='APPROVED_BY_MANAGER'";

	private static String GETAllRECORDSTODIRECTOR = "SELECT * FROM BOOKING_REQUEST WHERE status='REQUEST_TO_DIRECTOR'";

	private static String GETAllRECORDSFORDIRECTOR = "SELECT * FROM BOOKING_REQUEST WHERE status in('APPROVED_BY_DIRECTOR','REJECTED_BY_DIRECTOR')";

	
	
	private static String GETSINGLEBOOKINGREQUESTFORDIRECTOR = "SELECT * FROM BOOKING_REQUEST WHERE BOOKING_REQUEST_ID =? and status='APPROVED_BY_DIRECTOR'";

	private static String GETRESUBMITDOCUMENTREQUEST = "select * from BOOKING_REQUEST where EMPLOYEE_ID=? and status='RESUBMIT_DOCUMENTS'";

	public boolean addNewBookingRequest(BookingRequest bookingRequest) {
		jdbcTemplate.update(INSERTBOOKINGREQUEST, bookingRequest.getEmployee().getEmployeeId(),
				bookingRequest.getSourceFrom(), bookingRequest.getDestinationTo(), bookingRequest.getStartDate(),
				bookingRequest.getEndDate(), bookingRequest.getTravelMedium(), bookingRequest.getAadharNo(),
//				bookingRequest.getAadharPhoto(),
				bookingRequest.getPassportNo());
		// bookingRequest.getPassportPhoto(),
		// bookingRequest.getStatus());

		return true;
	}

	public boolean updateBookingRequest(BookingRequest bookingRequest) {
		jdbcTemplate.update(UPDATEBOOKINGREQUEST, bookingRequest.getSourceFrom(), bookingRequest.getDestinationTo(),
				bookingRequest.getStartDate(), bookingRequest.getEndDate(), bookingRequest.getTravelMedium(),
				bookingRequest.getStatus(), bookingRequest.getBookingRequestId());
		return true;
	}

	public boolean deleteBookingRequest(int bookingRequestId) {
		jdbcTemplate.update(DELETEBOOKINGREQUEST, bookingRequestId);
		return true;
	}

	public List<BookingRequest> getAllBookingRequest() {
		List<BookingRequest> bookingRequest = jdbcTemplate.query(GETALLBOOKINGREQUEST, new BookingRequestRowMapper());
		return bookingRequest;
	}

	class BookingRequestRowMapper implements RowMapper<BookingRequest> {

		public BookingRequest mapRow(ResultSet rs, int rownum) throws SQLException {

			BookingRequest bookingRequest = new BookingRequest();

			bookingRequest.setBookingRequestId(rs.getInt("BOOKING_REQUEST_ID"));

			// Employee employee=new
			// EmployeeDAOImpl().getEmployee(rs.getInt("EMPLOYEE_ID"));

			Employee employee = employeeDAO.getEmployee(rs.getInt("EMPLOYEE_ID"));

			bookingRequest.setEmployee(employee);

			bookingRequest.setSourceFrom(rs.getString("SOURCE_FROM"));

			bookingRequest.setDestinationTo(rs.getString("DESTINATION_TO"));

			bookingRequest.setStartDate(rs.getDate("START_DATE"));

			bookingRequest.setEndDate(rs.getDate("END_DATE"));

			bookingRequest.setTravelMedium(rs.getString("TRAVEL_MEDIUM"));

			bookingRequest.setAadharNo(rs.getLong("AADHAR_NO"));

			bookingRequest.setAadharPhoto(rs.getBytes("AADHAR_PHOTO"));

			bookingRequest.setPassportNo(rs.getLong("PASSPORT_NO"));

			bookingRequest.setPassportPhoto(rs.getBytes("PASSPORT_PHOTO"));

			bookingRequest.setStatus(rs.getString("STATUS"));

			return bookingRequest;
		}

	}

	public BookingRequest getBookingRequest(int bookingRequestId) {
		BookingRequest bookingRequest = jdbcTemplate.queryForObject(GETBOOKINGREQUEST, new BookingRequestRowMapper(),
				bookingRequestId);
		return bookingRequest;
	}

	@Override
	public List<BookingRequest> getBookingRequestByEmployeeId(int employeeId) {
		List<BookingRequest> bookingRequest = jdbcTemplate.query(GETBOOKINGREQUESTBYEMPLOYEEID,
				new BookingRequestRowMapper(), employeeId);
		return bookingRequest;
	}

	@Override
	public BookingRequest getRequest(int bookingRequestId) {
		BookingRequest bookingRequest = jdbcTemplate.queryForObject(GETSINGLEBOOKINGREQUEST,
				new BookingRequestRowMapper(), bookingRequestId);
		return bookingRequest;
	}

	@Override
	public List<BookingRequest> getBookingRequest() {
		List<BookingRequest> bookingRequest = jdbcTemplate.query(GETAllRECORD, new BookingRequestRowMapper());
		return bookingRequest;
	}

	@Override
	public List<BookingRequest> getBookingRequestToDirector() {
		List<BookingRequest> bookingRequest = jdbcTemplate.query(GETAllRECORDSTODIRECTOR,
				new BookingRequestRowMapper());
		return bookingRequest;
	}
	
	@Override
	public List<BookingRequest> getBookingRequestForDirector() {
		List<BookingRequest> bookingRequest = jdbcTemplate.query(GETAllRECORDSFORDIRECTOR,
				new BookingRequestRowMapper());
		return bookingRequest;
	}

	@Override
	public BookingRequest getRequestDirector(int bookingRequestId) {
		BookingRequest bookingRequest = jdbcTemplate.queryForObject(GETSINGLEBOOKINGREQUESTFORDIRECTOR,
				new BookingRequestRowMapper(), bookingRequestId);
		return bookingRequest;
	}

	@Override
	public List<BookingRequest> getResubmitDocuments(int employeeId) {
		List<BookingRequest> bookingRequest = jdbcTemplate.query(GETRESUBMITDOCUMENTREQUEST,
				new BookingRequestRowMapper(), employeeId);
		return bookingRequest;
	}

}
