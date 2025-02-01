package com.escola.authserver.entity;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Setter
@Getter
@Entity
@Table(name="Module_Privileges_Mapping")
public class ModulePrivilegesMapping extends AuditEntity implements Serializable , BaseEntity {

	private static final long serialVersionUID = -2815537346238976829L;
	
	public ModulePrivilegesMapping() {
		super.setRecordStatus(1);
	}
	
	@EmbeddedId
	private ModulePrivilegesPK modulePrivilegesPK;

	public ModulePrivilegesMapping(Modules module, Privileges privilege) {
		super.setRecordStatus(1);
		modulePrivilegesPK=new ModulePrivilegesPK(module,privilege);
	}

	public ModulePrivilegesPK getModulePrivilegesPK() {
		return modulePrivilegesPK;
	}

}
