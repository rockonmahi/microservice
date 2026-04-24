
package com.escola.authserver.service;

import org.springframework.security.core.userdetails.UserDetailsService;

public interface RegisteredUserService extends UserDetailsService {

	String saveLoginUser();

}
