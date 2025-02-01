package com.escola.authserver.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import java.io.Serializable;
import java.util.Set;

@Setter
@Getter
@Entity
@Table(name = "Organization")
public class Organization extends AuditEntity implements Serializable, BaseEntity {

	private static final long serialVersionUID = 491247714130613174L;
	
	public Organization() {
		super.setRecordStatus(1);
	}
	
	@Id
	@GeneratedValue(generator = "organization")
	@GenericGenerator(name = "organization", strategy = "uuid2")
	@Column(name = "Org_Id",updatable = false, nullable = true)
	private String orgId;

	@Column(name = "Org_Code", nullable = false, length = 10)
	private String orgCode;

	@Column(name = "Org_Name", nullable = false)
	private String orgName;

	@Column(name = "Active", nullable = false, length = 1)
	private Integer active;
	
	@OneToMany(mappedBy = "organization")
	private Set<Modules> modules;
	
	@OneToMany(mappedBy = "organization")
	private Set<Privileges> privileges;
}
