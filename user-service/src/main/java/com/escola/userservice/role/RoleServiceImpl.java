package com.escola.userservice.role;


import org.springframework.stereotype.Service;

@Service
public class RoleServiceImpl implements RoleService {

	@Override
	public String createRole(String name, String empId) {

		return "{name:" + name + ",empId:" + empId + "}";
	}
}
