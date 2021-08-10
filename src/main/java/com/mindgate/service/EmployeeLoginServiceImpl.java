package com.mindgate.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mindgate.dao.EmployeeDAO;
import com.mindgate.pojo.Employee;

@Service
public class EmployeeLoginServiceImpl implements EmployeeLoginService {

	@Autowired
	EmployeeDAO employeeDAO;

	@Override
	public Employee login(Employee employee) {
		int employeeId = employee.getEmployeeId();

		Employee employee1 = employeeDAO.getEmployee(employeeId);

		if (employee1 != null) {
			if (employee1.getEmployeePassword().equals(employee.getEmployeePassword())) {
				return employee1;
			}
		}
		return employee;
	}

}
