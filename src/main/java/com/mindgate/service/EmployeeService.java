package com.mindgate.service;

import java.util.List;

import com.mindgate.pojo.Employee;

public interface EmployeeService {
	public boolean addNewEmployee(Employee employee);
	public boolean updateEmployee(Employee employee);
	public boolean deleteEmployee(int employeeId);
	public Employee getEmployee(int employeeId);
	public List<Employee> getAllEmployees();

	
}
