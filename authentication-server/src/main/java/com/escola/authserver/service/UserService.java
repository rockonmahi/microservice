
package com.escola.authserver.service;

import com.escola.authserver.dto.UserLoginDto;
import com.escola.authserver.form.UserLoginForm;

public interface UserService {

	public String saveLoginUser();

	public UserLoginDto getUserDetails(UserLoginForm userLogin);

}
