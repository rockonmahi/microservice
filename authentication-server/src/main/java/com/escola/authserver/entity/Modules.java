package com.escola.authserver.entity;

import com.escola.authserver.entity.AuditEntity;
import com.escola.authserver.entity.Organization;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Setter
@Getter
@Entity
@Table(name="Modules")
public class Modules extends AuditEntity implements Serializable , BaseEntity{

	private static final long serialVersionUID = -3616038677399721684L;
	
	public Modules() {
		super.setRecordStatus(1);
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Module_ID")
	private Integer moduleId;

	@Column(name = "Module_Desc")
	private String moduleDesc;

	@Column(name = "Module_Name")
	private String moduleName;
	
	@ManyToOne
	@JoinColumn(name = "Org_Id")
	private Organization organization;
}
