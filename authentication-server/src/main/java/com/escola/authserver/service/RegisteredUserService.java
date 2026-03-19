
package com.escola.authserver.service;

import com.escola.authserver.dto.UserLoginDto;
import com.escola.authserver.form.UserLoginForm;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface RegisteredUserService extends UserDetailsService {

	String saveLoginUser();

}
