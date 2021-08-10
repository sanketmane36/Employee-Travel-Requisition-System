package com.mindgate.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mindgate.dao.EmployeeDAOImpl;
import com.mindgate.pojo.Employee;
@Service
public class EmployeeServiceImpl implements EmployeeService {

	private final Logger LOGGER = LoggerFactory.getLogger(this.getClass());

	 @Autowired
	EmployeeDAOImpl employeeDAOImpl;
	
	@Override
	public boolean addNewEmployee(Employee employee) {
		
		return employeeDAOImpl.addNewEmployee(employee);
	}

	@Override
	public boolean updateEmployee(Employee employee) {
		
		return employeeDAOImpl.updateEmployee(employee);
	}

	@Override
	public boolean deleteEmployee(int employeeId) {
		
		return employeeDAOImpl.deleteEmployee(employeeId);
	}

	@Override
	public Employee getEmployee(int employeeId) {
		
		return employeeDAOImpl.getEmployee(employeeId);
	}

	@Override
	public List<Employee> getAllEmployees() {
		return employeeDAOImpl.getAllEmployees();
	}

}
