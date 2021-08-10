package com.mindgate.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mindgate.pojo.Agent;
import com.mindgate.pojo.Employee;
import com.mindgate.service.EmployeeLoginService;
import com.mindgate.service.AgentLoginService;


@RestController
@CrossOrigin
@RequestMapping("/login")
public class LoginController {
	
	@Autowired
	EmployeeLoginService employeeLoginService;
	
	@Autowired
	AgentLoginService agentLoginService;
	@RequestMapping(value = "/employee" , method = RequestMethod.POST)
	public Employee login(@RequestBody Employee employee) {

		return employeeLoginService.login(employee);
	}
	
	@RequestMapping(value = "/agent" , method = RequestMethod.POST)
	public Agent login(@RequestBody Agent agent) {

		return agentLoginService.login(agent);
	}

}
