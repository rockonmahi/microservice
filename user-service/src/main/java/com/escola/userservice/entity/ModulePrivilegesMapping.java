package com.escola.userservice.entity;

import java.io.Serializable;

import jakarta.persistence.*;

@Entity
@Table(name="Module_Privileges_Mapping")
public class ModulePrivilegesMapping extends AuditEntity implements Serializable , BaseEntity{

	private static final long serialVersionUID = -2815537346238976829L;
	
	public ModulePrivilegesMapping() {
		super.setRecordStatus(1);
	}
	
	@EmbeddedId
	private ModulePrivilegesPK modulePrivilegesPK;
	
	
	public ModulePrivilegesMapping(Modules module,Privileges privilege) {
		super.setRecordStatus(1);
		modulePrivilegesPK=new ModulePrivilegesPK(module,privilege);
	}

	public ModulePrivilegesPK getModulePrivilegesPK() {
		return modulePrivilegesPK;
	}

	public void setModulePrivilegesPK(ModulePrivilegesPK modulePrivilegesPK) {
		this.modulePrivilegesPK = modulePrivilegesPK;
	}
}
