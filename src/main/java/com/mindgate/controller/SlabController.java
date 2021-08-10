package com.mindgate.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mindgate.pojo.Slab;
import com.mindgate.service.SlabService;


@RestController
@CrossOrigin
@RequestMapping("/slab")
public class SlabController {

	

	@Autowired
	private SlabService slabService;
	
	
	@RequestMapping(value = "/allSlab" , method = RequestMethod.GET)
	public List<Slab> getSlabs()
	{
		return slabService.getAllSlab();
		
	}
	
	@RequestMapping(value= "/{slabId}" , method = RequestMethod.GET)
	public Slab getSlab(@PathVariable int slabId)
	{
		return slabService.getSlab(slabId);
	}
	
	
	@RequestMapping(value = "/newSlab" , method = RequestMethod.POST)
	public boolean addNewSlab(@RequestBody Slab slab)
	{
		
		return slabService.addNewSlab(slab);
	}
	
	@RequestMapping(value = "/updateSlab" , method = RequestMethod.PUT)
	public boolean updateEmployee(@RequestBody Slab slab)
	{
		
		return slabService.updateSlab(slab);
		
	}
	
	@RequestMapping(value= "/{slabId}" , method = RequestMethod.DELETE)
	public boolean deleteSlab(@PathVariable int slabId)
	{
	
		return slabService.deleteSlab(slabId);
		
	}
	
}