package com.mindgate.pojo;

public class Slab {
	private int slabId;
	private String designation;
	private String travelMode;
	
	public Slab() {
		// TODO Auto-generated constructor stub
	}

	public Slab(int slabId, String designation, String travelMode) {
		super();
		this.slabId = slabId;
		this.designation = designation;
		this.travelMode = travelMode;
	}

	public int getSlabId() {
		return slabId;
	}

	public void setSlabId(int slabId) {
		this.slabId = slabId;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public String getTravelMode() {
		return travelMode;
	}

	public void setTravelMode(String travelMode) {
		this.travelMode = travelMode;
	}

	@Override
	public String toString() {
		return "Slab [slabId=" + slabId + ", designation=" + designation + ", travelMode=" + travelMode + "]";
	}

	

}
