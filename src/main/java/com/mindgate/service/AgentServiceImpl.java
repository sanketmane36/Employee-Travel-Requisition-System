package com.mindgate.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mindgate.dao.AgentDAOImpl;
import com.mindgate.pojo.Agent;

@Service
public class AgentServiceImpl implements AgentService {

	private final Logger LOGGER = LoggerFactory.getLogger(this.getClass());

	@Autowired
	AgentDAOImpl agentDaoImpl;
	@Override
	public boolean addNewAgent(Agent agent) {
		
		return agentDaoImpl.addNewAgent(agent);
	}

	@Override
	public boolean updateAgent(Agent agent) {
		
		return agentDaoImpl.updateAgent(agent);
	}

	@Override
	public boolean deleteAgent(int agentId) {
		
		return agentDaoImpl.deleteAgent(agentId);
	}

	@Override
	public Agent getAgent(int agentId) {
		
		return agentDaoImpl.getAgent(agentId);
	}

	@Override
	public List<Agent> getAllAgent() {
		
		return agentDaoImpl.getAllAgent();
	}
	
}
