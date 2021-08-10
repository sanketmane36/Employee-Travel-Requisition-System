package com.mindgate.dao;

import java.util.List;

import com.mindgate.pojo.Slab;

public interface SlabDAO {
	
	public boolean addNewSlab(Slab slab);
	public boolean updateSlab(Slab slab);
	public boolean deleteSlab(int slabId);
	public Slab getSlab(int slabId);
	public List<Slab> getAllSlab();
	
}
