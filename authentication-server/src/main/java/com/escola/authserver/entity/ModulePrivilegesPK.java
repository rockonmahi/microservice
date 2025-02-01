package com.escola.authserver.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.Objects;


@Setter
@Getter
@Embeddable
public class ModulePrivilegesPK implements Serializable{
	
	private static final long serialVersionUID = 1589022655665896165L;
	
	@Column(name = "Module_ID")
	private Integer moduleId;	
	
	@Column(name = "Privilege_ID")
	private Integer privilegeId;
	
	public ModulePrivilegesPK() {
	}
	
	public ModulePrivilegesPK(Modules module,Privileges privilege) {
		this.moduleId=module.getModuleId();
		this.privilegeId=privilege.getPrivilegeId();
	}

	@Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ModulePrivilegesPK)) return false;
        ModulePrivilegesPK that = (ModulePrivilegesPK) o;
        return Objects.equals(getModuleId(), that.getModuleId()) &&
                Objects.equals(getPrivilegeId(), that.getPrivilegeId());
    }
 
    @Override
    public int hashCode() {
        return Objects.hash(getModuleId(), getPrivilegeId());
    }	
}
