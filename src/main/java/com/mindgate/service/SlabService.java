package com.mindgate.service;

import java.util.List;

import com.mindgate.pojo.Slab;

public interface SlabService {
	

	public boolean addNewSlab(Slab slab);
	public boolean updateSlab(Slab slab);
	public boolean deleteSlab(int slabId);
	public Slab getSlab(int slabId);
	public List<Slab> getAllSlab();
	
}
