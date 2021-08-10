package com.mindgate.service;

import java.util.List;

import com.mindgate.pojo.Agent;

public interface AgentService {
	public boolean addNewAgent(Agent agent);
	public boolean updateAgent(Agent agent);
	public boolean deleteAgent(int agentId);
	public Agent getAgent(int agentId);
	public List<Agent> getAllAgent();
}
