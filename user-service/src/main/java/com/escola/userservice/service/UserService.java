
package com.escola.userservice.service;

import com.escola.userservice.dto.UserLoginDto;
import com.escola.userservice.form.UserLoginForm;

public interface UserService {

	public String saveLoginUser();

	public UserLoginDto getUserDetails(UserLoginForm userLogin);

}
