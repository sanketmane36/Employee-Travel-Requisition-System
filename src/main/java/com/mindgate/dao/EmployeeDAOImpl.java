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

import com.mindgate.pojo.Employee;
import com.mindgate.pojo.Slab;

@Repository
public class EmployeeDAOImpl implements EmployeeDAO {
	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Autowired
	private SlabDAOImpl slabDAOImpl;

	private final Logger LOGGER = LoggerFactory.getLogger(this.getClass());
	private static String INSERTEMPLOYEE = "insert into EMPLOYEE values(EMPLOYEE_SEQ.NEXTVAL,?,?,?,?,?,?,?,?,?,?,?,?,?)";
	private static String UPDATEEMPLOYEE = "update EMPLOYEE set SLAB_ID=?, FIRST_NAME=?,LAST_NAME=?,AGE=?,ADDRESS=?,CITY=?,PINCODE=?,"
			+ "E_STATE=?,COUNTRY=?,CONTACT=?,EMAIL_ID=?,EMPLOYEE_PASSWORD=?  where EMPLOYEE_ID=?";
	private static String GETALLEMPLOYEES = "select * from EMPLOYEE";
	private static String GETEMPLOYEE = "select * from EMPLOYEE where EMPLOYEE_ID=?";
	private static String DELETEEMPLOYEE = "delete from EMPLOYEE where EMPLOYEE_ID=? ";

	@Override
	public boolean addNewEmployee(Employee employee) {
		LOGGER.info("addNewEmployee called");

		jdbcTemplate.update(INSERTEMPLOYEE,
				employee.getSlab().getSlabId(),
				employee.getFirstName(),
				employee.getLastName(),
				employee.getAge(),
				employee.getAddress(),
				employee.getCity(), 
				employee.getPincode(),
				employee.getState(),
				employee.getCountry(),
				employee.getGender(),
				employee.getContact(), 
				employee.getEmailId(), 
				employee.getEmployeePassword());
		LOGGER.info("addNewEmployee end");

		return true;
	}

	@Override
	public boolean updateEmployee(Employee employee) {

		jdbcTemplate.update(UPDATEEMPLOYEE, employee.getSlab().getSlabId(), employee.getFirstName(),
				employee.getLastName(), employee.getAge(), employee.getAddress(), employee.getCity(),
				employee.getPincode(), employee.getState(), employee.getCountry(),
				employee.getContact(), employee.getEmailId(), employee.getEmployeePassword(), employee.getEmployeeId());

		return true;
	}

	@Override
	public boolean deleteEmployee(int employeeId) {
		LOGGER.info("deleteEmployee called");


		jdbcTemplate.update(DELETEEMPLOYEE, employeeId);
		
		LOGGER.info("deleteEmployee end");

		return true;
	}

	@Override
	public Employee getEmployee(int employeeId) {
		Employee employee = jdbcTemplate.queryForObject(GETEMPLOYEE, new EmployeeRowMapper(), employeeId);
		return employee;
	}

	@Override
	public List<Employee> getAllEmployees() {
		List<Employee> employees = jdbcTemplate.query(GETALLEMPLOYEES, new EmployeeRowMapper());
		return employees;
	}

	class EmployeeRowMapper implements RowMapper<Employee> {


		public Employee mapRow(ResultSet rs, int rownum) throws SQLException {
			Employee employee = new Employee();

			employee.setEmployeeId(rs.getInt("EMPLOYEE_ID"));
			
			Slab slab = slabDAOImpl.getSlab(rs.getInt("SLAB_ID"));
			LOGGER.info("before setslab"+slab);
			employee.setSlab(slab);
			LOGGER.info("after setslab"+slab);

			employee.setFirstName(rs.getString("FIRST_NAME"));
			employee.setLastName(rs.getString("LAST_NAME"));
			employee.setAge(rs.getInt("AGE"));
			employee.setAddress(rs.getString("ADDRESS"));
			employee.setCity(rs.getString("CITY"));
			employee.setPincode(rs.getInt("PINCODE"));
			employee.setState(rs.getString("E_STATE"));
			employee.setCountry(rs.getString("COUNTRY"));
			employee.setGender(rs.getString("GENDER"));
			employee.setContact(rs.getLong("CONTACT"));
			employee.setEmailId(rs.getString("EMAIL_ID"));
			employee.setEmployeePassword(rs.getString("EMPLOYEE_PASSWORD"));

			return employee;

		}
	}
}