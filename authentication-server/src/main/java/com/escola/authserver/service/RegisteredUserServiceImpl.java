
package com.escola.authserver.service;

import com.escola.authserver.dto.UserLoginDto;
import com.escola.authserver.dto.UserRegistrationDto;
import com.escola.authserver.entity.RegisteredUsers;
import com.escola.authserver.entity.RegisteredUsersDetails;
import com.escola.authserver.repository.RegisteredUsersRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
@RequiredArgsConstructor
public class RegisteredUserServiceImpl implements RegisteredUserService {

	private final PasswordEncoder passwordEncoder;

	private final RegisteredUsersRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		List<RegisteredUsers> userList = userRepository.findByUserNameAndAccountLock(username,0);
		UserLoginDto userLoginDto= new UserLoginDto();
		if (userList.isEmpty()) {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}else{
			RegisteredUsers user = userList.get(0);
			userLoginDto.setUsername(user.getUserName());
			userLoginDto.setPassword(user.getPassword());
		}
		List<GrantedAuthority> authorities = Stream.of("openid","email","phone").map(SimpleGrantedAuthority::new).collect(Collectors.toList());
		return new User(userLoginDto.getUsername(), userLoginDto.getPassword(), authorities);
	}

	@Override
	public String registerUser(UserRegistrationDto registrationDto) {
		RegisteredUsersDetails userDetails = RegisteredUsersDetails.builder()
				.firstName(registrationDto.getFirstName())
				.middleName(registrationDto.getMiddleName())
				.lastName(registrationDto.getLastName())
				.build();

		RegisteredUsers user = RegisteredUsers.builder()
				.userName(registrationDto.getUserName())
				.fullName(registrationDto.getFullName())
				.password(passwordEncoder.encode(registrationDto.getPassword()))
				.active(1)
				.accountLock(0)
				.userDetails(userDetails)
				.build();

		return userRepository.save(user).getId();
	}

	@Override
	public void updateUser(String id, UserRegistrationDto registrationDto) {
		Optional<RegisteredUsers> existingUser = userRepository.findById(id);
		if (existingUser.isPresent()) {
			RegisteredUsersDetails userDetails = RegisteredUsersDetails.builder()
					.firstName(registrationDto.getFirstName())
					.middleName(registrationDto.getMiddleName())
					.lastName(registrationDto.getLastName())
					.build();

			RegisteredUsers.RegisteredUsersBuilder builder = RegisteredUsers.builder()
					.id(id)
					.userName(registrationDto.getUserName())
					.fullName(registrationDto.getFullName())
					.active(existingUser.get().getActive())
					.accountLock(existingUser.get().getAccountLock())
					.userDetails(userDetails);

			if (registrationDto.getPassword() != null && !registrationDto.getPassword().isEmpty()) {
				builder.password(passwordEncoder.encode(registrationDto.getPassword()));
			} else {
				builder.password(existingUser.get().getPassword());
			}

			userRepository.save(builder.build());
		} else {
			throw new UsernameNotFoundException("User not found with id: " + id);
		}
	}
}