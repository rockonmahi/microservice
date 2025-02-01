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
public class RoleModulesPK implements Serializable{
	
	private static final long serialVersionUID = 1589022655665896165L;
	
	@Column(name = "Role_ID")
	private Integer roleId;
	
	@Column(name = "Module_ID")
	private Integer moduleId;
	
	public RoleModulesPK() {
	}
	
	public RoleModulesPK(Roles role,Modules module) {
		this.roleId=role.getRoleId();
		this.moduleId=module.getModuleId();
	}

	@Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof RoleModulesPK)) return false;
        RoleModulesPK that = (RoleModulesPK) o;
        return Objects.equals(getRoleId(), that.getRoleId()) &&
                Objects.equals(getModuleId(), that.getModuleId());
    }
 
    @Override
    public int hashCode() {
        return Objects.hash(getRoleId(), getModuleId());
    }
}
