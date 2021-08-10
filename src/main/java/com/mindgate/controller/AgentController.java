package com.mindgate.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mindgate.pojo.Agent;
import com.mindgate.service.AgentService;

@RestController
@CrossOrigin
@RequestMapping("/agents")
public class AgentController {

	@Autowired
	private AgentService agentService;
	
	
	@RequestMapping(value = "/allAgents" , method = RequestMethod.GET)
	public List<Agent> getAgents()
	{
		return agentService.getAllAgent();
		
	}
	
	@RequestMapping(value= "/{agentId}" , method = RequestMethod.GET)
	public Agent getAgent(@PathVariable int agentId)
	{
		return agentService.getAgent(agentId);
	}
	
	
	//http://localhost:8080/agents/newAgent
	@RequestMapping(value = "/newAgent" , method = RequestMethod.POST)
	public boolean addNewAgent(@RequestBody Agent agent)
	{
		
		return agentService.addNewAgent(agent);
	}
	
	@RequestMapping(value = "/updateAgent" , method = RequestMethod.PUT)
	public boolean updateAgent(@RequestBody Agent agent)
	{
		
		return agentService.updateAgent(agent);
		
	}
	
	@RequestMapping(value= "/{agentId}" , method = RequestMethod.DELETE)
	public boolean deleteAgent(@PathVariable int agentId)
	{
		return agentService.deleteAgent(agentId);
	
		
	}
}