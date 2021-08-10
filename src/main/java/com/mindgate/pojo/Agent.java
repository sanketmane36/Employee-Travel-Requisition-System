package com.mindgate.pojo;

public class Agent {
	private int agentId;
	private String agentName;
	private String agentPassword;
	private long contact;
	
	public Agent() {
		// TODO Auto-generated constructor stub
	}

	public Agent(int agentId, String agentName, String agentPassword, long contact) {
		super();
		this.agentId = agentId;
		this.agentName = agentName;
		this.agentPassword = agentPassword;
		this.contact = contact;
	}

	public int getAgentId() {
		return agentId;
	}

	public void setAgentId(int agentId) {
		this.agentId = agentId;
	}

	public String getAgentName() {
		return agentName;
	}

	public void setAgentName(String agentName) {
		this.agentName = agentName;
	}

	public String getAgentPassword() {
		return agentPassword;
	}

	public void setAgentPassword(String agentPassword) {
		this.agentPassword = agentPassword;
	}

	public long getContact() {
		return contact;
	}

	public void setContact(long contact) {
		this.contact = contact;
	}

	@Override
	public String toString() {
		return "Agent [agentId=" + agentId + ", agentName=" + agentName + ", agentPassword=" + agentPassword
				+ ", contact=" + contact + "]";
	}

	
}
