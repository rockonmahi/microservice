package com.escola.authserver.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Setter
@Getter
@Entity
@Table(name="Privileges")
public class Privileges extends AuditEntity implements Serializable , BaseEntity{

	private static final long serialVersionUID = 615592636053903122L;
	
	public Privileges() {
		super.setRecordStatus(1);
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Privilege_ID")
	private Integer privilegeId;

	@Column(name = "Privilege_Desc")
	private String privilegeDesc;

	@Column(name = "Privilege_Name")
	private String privilegeName;
	
	@Column(name = "Privilege",length = 10)
	@Enumerated(EnumType.STRING)
	private Privilege privilege;
	
	@ManyToOne
	@JoinColumn(name = "Org_Id")
	private Organization organization;
}

enum Privilege {
	LOGIN
}