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
@Table(name="Role_Modules_Mapping")
public class RoleModulesMapping extends AuditEntity implements Serializable , BaseEntity{

	private static final long serialVersionUID = -2815537346238976829L;
	
	public RoleModulesMapping() {
		super.setRecordStatus(1);
	}
	
	@EmbeddedId
	private RoleModulesPK roleModulesPK;
	
	public RoleModulesMapping(Roles role, Modules module) {
		super.setRecordStatus(1);
		roleModulesPK=new RoleModulesPK(role,module);
	}
}
