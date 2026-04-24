
package com.escola.authserver.service;

import com.escola.authserver.dto.UserLoginDto;
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
			String userId = saveLoginUser();
			RegisteredUsers user = userRepository.findById(userId).get();
			userLoginDto.setUsername(user.getUserName());
			userLoginDto.setPassword(user.getPassword());
		}else{
			RegisteredUsers user=userList.get(0);
			userLoginDto.setUsername(user.getUserName());
			userLoginDto.setPassword(user.getPassword());
		}
		List<GrantedAuthority> authorities = Stream.of("openid","email","phone").map(SimpleGrantedAuthority::new).collect(Collectors.toList());
		return new User(userLoginDto.getUsername(), userLoginDto.getPassword(), authorities);
	}

	@Override
	public String saveLoginUser() {

		RegisteredUsersDetails userDetails = RegisteredUsersDetails.builder()
				.firstName("Mahendra")
				.middleName("Pratap")
				.lastName("Singh")
				.build();

		RegisteredUsers user = RegisteredUsers.builder()
                .userName("rockonmahi")
                .fullName("Mahendra Pratap")
                .password(passwordEncoder.encode("test"))
                .active(1)
                .accountLock(0)
				.userDetails(userDetails)
                .build();

		userRepository.save(user);

		List<RegisteredUsers> loginUserList = userRepository.findByUserNameAndAccountLock(user.getUserName(),0);
		if (!loginUserList.isEmpty()) {
			user = loginUserList.get(0);
		}

		return user.getId();
	}
}