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

import com.mindgate.pojo.Slab;

@Repository
public class SlabDAOImpl implements SlabDAO {

	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	private SimpleJdbcCall simpleJdbcCallRefCursor;

	private final Logger LOGGER = LoggerFactory.getLogger(this.getClass());

	private static String INSERTSLAB = "insert into SLAB values(SLAB_SEQ.NEXTVAL,?,?)";
	private static String UPDATESLAB = "update SLAB set DESIGNATION= ?,TRAVEL_MODE= ? where SLAB_ID=?";
	private static String GETALLSLAB = "select * from SLAB";
	private static String GETSLAB = "select * from SLAB where SLAB_ID=?";
	private static String DELETESLAB = "delete from SLAB where SLAB_ID=? ";

	@Override
	public boolean addNewSlab(Slab slab) {
		jdbcTemplate.update(INSERTSLAB,
				slab.getDesignation(),
				slab.getTravelMode());
		return true;
	}

	@Override
	public boolean updateSlab(Slab slab) {
		jdbcTemplate.update(UPDATESLAB, slab.getDesignation(), slab.getTravelMode(), slab.getSlabId());
		return true;
	}

	@Override
	public boolean deleteSlab(int slabId) {
		jdbcTemplate.update(DELETESLAB, slabId);
		return true;
	}

	@Override
	public Slab getSlab(int slabId) {
		LOGGER.info("in getSlab method of slabDAOImpl==================");
//		Slab slab = jdbcTemplate.queryForObject(GETSLAB, new SlabRowMapper(), slabId);
//		return slab;
		
		simpleJdbcCallRefCursor =
				new SimpleJdbcCall(jdbcTemplate)
				.withProcedureName("get_slab_details")
				.returningResultSet("c_slab", new SlabRowMapper());
		
		SqlParameterSource parameterSource =
				new MapSqlParameterSource()
				.addValue("in_slab_id", slabId);
		
		Map result =
				simpleJdbcCallRefCursor.execute(parameterSource);
		
		
		if(result != null)
		{
			List<Slab> slabList =
					(List<Slab>)result.get("c_slab");
			return slabList.get(0);
		}
		
		
		return new Slab();
	}

	@Override
	public List<Slab> getAllSlab() {
		List<Slab> slab = jdbcTemplate.query(GETALLSLAB, new SlabRowMapper());
		return slab;
	}

	private static final class SlabRowMapper implements RowMapper<Slab> {

		@Override
		public Slab mapRow(ResultSet rs, int rowNum) throws SQLException {
			Slab slab = new Slab();
			slab.setSlabId(rs.getInt("SLAB_ID"));
			slab.setDesignation(rs.getString("DESIGNATION"));
			slab.setTravelMode(rs.getString("TRAVEL_MODE"));
			return slab;
		}


	}

}
