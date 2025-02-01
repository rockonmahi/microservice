package com.escola.userservice.entity;

import jakarta.persistence.*;
import org.hibernate.annotations.GenericGenerator;

import java.io.Serializable;
import java.util.List;




@Entity
@Table(name = "User")
public class User extends AuditEntity implements Serializable, BaseEntity {

	private static final long serialVersionUID = 491247714130613174L;
	
	public User() {
		super.setRecordStatus(1);
	}
	
	@Id
	@GeneratedValue(generator = "loginuser")
	@GenericGenerator(name = "loginuser", strategy = "uuid2")
	@Column(name = "User_Id",updatable = false, nullable = true)//, columnDefinition = "BINARY(16)")
	private String userId;	
	
	@Column(name = "User_Name",unique = true, nullable = false, length = 10)
	private String userName;

	@Column(name = "Full_Name", nullable = false, length = 200)
	private String fullName;

	@Column(name = "Password", nullable = false, length = 300)
	private String password;

	@Column(name = "Active", nullable = false, length = 2)
	private Integer active;

	@Column(name = "Account_Lock", nullable = false, length = 2)
	private Integer accountLock;

	@OneToOne(mappedBy = "user" ,cascade = CascadeType.ALL,fetch = FetchType.LAZY)
	private UserDetails userDetails;

	@OneToMany(mappedBy = "user")
	private List<UserLoginHistory> loginUserHistory;

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public UserDetails getUserDetails() {
		return userDetails;
	}

	public void setUserDetails(UserDetails userDetails) {
		this.userDetails = userDetails;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Integer getActive() {
		return active;
	}

	public void setActive(Integer active) {
		this.active = active;
	}

	public Integer getAccountLock() {
		return accountLock;
	}

	public void setAccountLock(Integer accountLock) {
		this.accountLock = accountLock;
	}

	public List<UserLoginHistory> getLoginUserHistory() {
		return loginUserHistory;
	}

	public void setLoginUserHistory(List<UserLoginHistory> loginUserHistory) {
		this.loginUserHistory = loginUserHistory;
	}
}
