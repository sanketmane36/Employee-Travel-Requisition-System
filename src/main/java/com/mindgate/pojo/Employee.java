package com.mindgate.pojo;


public class Employee {

	
	private int employeeId;
	
	private Slab slab;
	
	private String firstName;
	private String lastName;
	private int age;
	private String address;
	private String city;
	private int pincode;
	private String state;
	private String country;
	private String gender;
	private long contact;
	private String emailId;
	private String employeePassword;

	public Employee() {
		// TODO Auto-generated constructor stub
	}

	public Employee(int employeeId, Slab slab, String firstName, String lastName, int age, String address, String city,
			int pincode, String state, String country, String gender, long contact, String emailId,
			String employeePassword) {
		super();
		this.employeeId = employeeId;
		this.slab = slab;
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.address = address;
		this.city = city;
		this.pincode = pincode;
		this.state = state;
		this.country = country;
		this.gender = gender;
		this.contact = contact;
		this.emailId = emailId;
		this.employeePassword = employeePassword;
	}

	public int getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(int employeeId) {
		this.employeeId = employeeId;
	}

	public Slab getSlab() {
		return slab;
	}

	public void setSlab(Slab slab) {
		this.slab = slab;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public int getPincode() {
		return pincode;
	}

	public void setPincode(int pincode) {
		this.pincode = pincode;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public long getContact() {
		return contact;
	}

	public void setContact(long contact) {
		this.contact = contact;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getEmployeePassword() {
		return employeePassword;
	}

	public void setEmployeePassword(String employeePassword) {
		this.employeePassword = employeePassword;
	}

	@Override
	public String toString() {
		return "Employee [employeeId=" + employeeId + ", slab=" + slab + ", firstName=" + firstName + ", lastName="
				+ lastName + ", age=" + age + ", address=" + address + ", city=" + city + ", pincode=" + pincode
				+ ", state=" + state + ", country=" + country + ", gender=" + gender + ", contact=" + contact
				+ ", emailId=" + emailId + ", employeePassword=" + employeePassword + "]";
	}

	
	
}
