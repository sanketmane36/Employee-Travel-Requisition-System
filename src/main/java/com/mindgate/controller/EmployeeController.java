package com.mindgate.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mindgate.pojo.Employee;
import com.mindgate.service.EmployeeService;

@RestController
@CrossOrigin
@RequestMapping("/employees")
public class EmployeeController {

	

	@Autowired
	private EmployeeService employeeService;
	
	
	@RequestMapping(value = "/allEmployees" , method = RequestMethod.GET)
	public List<Employee> getEmployees()
	{
		return employeeService.getAllEmployees();
		
	}
	
	@RequestMapping(value= "/{employeeId}" , method = RequestMethod.GET)
	public Employee getEmployee(@PathVariable int employeeId)
	{
		System.out.println("in getEmployee");
		return employeeService.getEmployee(employeeId);
	}
	
	
	//http://localhost:8080/employees/newEmployee
	@RequestMapping(value = "/newEmployee" , method = RequestMethod.POST)
	public boolean addNewEmployee(@RequestBody Employee employee)
	{
		
		return employeeService.addNewEmployee(employee);
	}
	
	@RequestMapping(value = "/updateEmployee" , method = RequestMethod.PUT)
	public boolean updateEmployee(@RequestBody Employee employee)
	{
		
		return employeeService.updateEmployee(employee);
		
	}
	
	@RequestMapping(value= "/{employeeId}" , method = RequestMethod.DELETE)
	public boolean deleteEmployee(@PathVariable int employeeId)
	{
	
		return employeeService.deleteEmployee(employeeId);
		
	}
	
}