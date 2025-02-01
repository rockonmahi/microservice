package com.escola.authserver.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import java.io.Serializable;
import java.util.List;



@Setter
@Getter
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
}
