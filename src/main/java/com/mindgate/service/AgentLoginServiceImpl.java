package com.mindgate.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mindgate.dao.AgentDAO;
import com.mindgate.pojo.Agent;

@Service
public class AgentLoginServiceImpl implements AgentLoginService {

	@Autowired
	AgentDAO agentDAO;

	@Override
	public Agent login(Agent agent) {
		int agentId = agent.getAgentId();
		
		Agent agent1 = agentDAO.getAgent(agentId);
		
		System.out.println(agent1);

		if (agent1 != null) {
			if (agent1.getAgentPassword().equals(agent.getAgentPassword())) {
				return agent1;
			}
		}
		return null;

	}
}
