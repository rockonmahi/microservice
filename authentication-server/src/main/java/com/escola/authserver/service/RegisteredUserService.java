
package com.escola.authserver.service;

import com.escola.authserver.dto.UserRegistrationDto;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface RegisteredUserService extends UserDetailsService {

	String registerUser(UserRegistrationDto registrationDto);

	void updateUser(String id, UserRegistrationDto registrationDto);

}
