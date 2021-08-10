package com.mindgate.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Repository;

import com.mindgate.pojo.Agent;

@Repository
public class AgentDAOImpl implements AgentDAO {

	
	private SimpleJdbcCall simpleJdbcCallRefCursor;

	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	private final Logger LOGGER = LoggerFactory.getLogger(this.getClass());
	
	private static String INSERTAGENT = "insert into AGENT(AGENT_ID,AGENT_NAME,AGENT_PASSWORD,CONTACT) values(AGENT_SEQ.NEXTVAL,?,?,?)";
	private static String UPDATEAGENT ="update AGENT  set  AGENT_NAME =?, "
			+ "CONTACT=?, AGENT_PASSWORD=? where AGENT_ID=?";
	private static String GETALLAGENTS = "select * from AGENT";
	private static String GETAGENT = "select * from AGENT where AGENT_ID=?";
	private static String DELETEAGENT = "delete from AGENT where AGENT_ID=? ";


	@Override
	public boolean addNewAgent(Agent agent) {
		jdbcTemplate.update(INSERTAGENT,
				agent.getAgentName(),
				agent.getAgentPassword(),
				agent.getContact());
		return true;
	}

	@Override
	public boolean updateAgent(Agent agent) {
		jdbcTemplate.update(UPDATEAGENT, agent.getAgentName(),
				agent.getContact(), agent.getAgentPassword(), agent.getAgentId());
		return true;
	}

	@Override
	public boolean deleteAgent(int AgentId) {
		jdbcTemplate.update(DELETEAGENT, AgentId);
		return true;
	}

	@Override
	public Agent getAgent(int AgentId) {
		LOGGER.info("Agent id"+AgentId);
//		Agent agent = jdbcTemplate.queryForObject(GETAGENT, new AgentRowMapper(),AgentId);
//		return agent;
		
		simpleJdbcCallRefCursor =
				new SimpleJdbcCall(jdbcTemplate)
				.withProcedureName("GET_AGENT_DETAILS")
				.returningResultSet("C_AGENT", new AgentRowMapper());
		
		SqlParameterSource parameterSource =
				new MapSqlParameterSource()
				.addValue("IN_AGENT_ID", AgentId);
		
		Map result= simpleJdbcCallRefCursor.execute(parameterSource);
		
		if(result != null) {
			List<Agent> agentList=(List<Agent>) result.get("C_AGENT");
			return agentList.get(0);
		}
		
//		Agent agent = jdbcTemplate.queryForObject(GETAGENT, new AgentRowMapper(),AgentId);
		return new Agent();


		
	}

	@Override
	public List<Agent> getAllAgent() {
	
		List<Agent> agent = jdbcTemplate.query(GETALLAGENTS, new AgentRowMapper());
		return agent;
	}
	
	class AgentRowMapper implements RowMapper<Agent> {  

		public Agent mapRow(ResultSet rs, int rownum) throws SQLException {
			Agent agent = new Agent();
			agent.setAgentId(Integer.valueOf(String.valueOf(rs.getLong("AGENT_ID"))));
			agent.setAgentName(rs.getString("AGENT_NAME"));
			agent.setContact(rs.getLong("CONTACT"));
			agent.setAgentPassword(rs.getString("AGENT_PASSWORD"));
			LOGGER.info("agentlog"+agent);
			return agent;

		}
	}
}
