package com.escola.userservice.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

import java.io.Serializable;
import java.util.Objects;



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

	public Integer getModuleId() {
		return moduleId;
	}

	public void setModuleId(Integer moduleId) {
		this.moduleId = moduleId;
	}

	public Integer getPrivilegeId() {
		return privilegeId;
	}

	public void setPrivilegeId(Integer privilegeId) {
		this.privilegeId = privilegeId;
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
