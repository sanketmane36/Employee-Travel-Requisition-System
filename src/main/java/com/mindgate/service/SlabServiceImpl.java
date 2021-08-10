package com.mindgate.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mindgate.dao.SlabDAOImpl;
import com.mindgate.pojo.Slab;

@Service
public class SlabServiceImpl implements SlabService {

	private final Logger LOGGER = LoggerFactory.getLogger(this.getClass());

	@Autowired
	SlabDAOImpl slabDAOImpl;
	
	@Override
	public boolean addNewSlab(Slab slab) {
	
		return slabDAOImpl.addNewSlab(slab);
	}

	@Override
	public boolean updateSlab(Slab slab) {
		return slabDAOImpl.updateSlab(slab);
	}

	@Override
	public boolean deleteSlab(int slabId) {
		return slabDAOImpl.deleteSlab(slabId);
	}

	@Override
	public Slab getSlab(int slabId) {
		return slabDAOImpl.getSlab(slabId);
	}

	@Override
	public List<Slab> getAllSlab() {
		return slabDAOImpl.getAllSlab();
	}

}
