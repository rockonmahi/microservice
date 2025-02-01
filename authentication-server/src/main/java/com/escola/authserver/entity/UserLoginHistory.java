package com.escola.authserver.entity;

import java.io.Serializable;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name="User_Login_History")
public class UserLoginHistory extends AuditEntity implements Serializable , BaseEntity{

	private static final long serialVersionUID = -1697962340729576327L;
	
	public UserLoginHistory() {
		super.setRecordStatus(1);
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="History_Id", nullable = false, length = 10)
	private Integer historyId;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "User_Id")
	private User user;
	
	@Column(name="System_Ip", nullable = false, length = 10)
	private String systemIp;
}
