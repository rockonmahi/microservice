package com.escola.saml2.config;

import com.escola.saml2.filter.Saml2Filter;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.saml2.provider.service.authentication.OpenSaml4AuthenticationProvider;
import org.springframework.security.saml2.provider.service.web.authentication.Saml2WebSsoAuthenticationFilter;
import org.springframework.security.web.SecurityFilterChain;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@RequiredArgsConstructor
public class SecurityConfig {

	private final Saml2Filter saml2Filter;

	private final OpenSaml4AuthenticationProvider samlAuthProv;

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

		http
			.saml2Login(withDefaults())
			.saml2Logout(withDefaults())
			.authenticationProvider(samlAuthProv)
			.addFilterBefore(saml2Filter, Saml2WebSsoAuthenticationFilter.class)
			.authorizeHttpRequests(authorize ->
				authorize
					.requestMatchers("/actuator/health").permitAll()
					.requestMatchers( "/carsonline", "/buy/**", "/user")
					.authenticated());
		return http.build();
	}
}