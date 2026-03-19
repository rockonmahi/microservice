package com.escola.authserver.form;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
public class UserLoginForm {
	
	private String username;
	private String password;

	public UserLoginForm(String username){
		this.username=username;
	}

}
