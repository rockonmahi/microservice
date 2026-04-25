package com.escola.authserver.controller;

import com.escola.authserver.api.RegistrationUserApi;
import com.escola.authserver.dto.UserRegistrationDto;
import com.escola.authserver.service.RegisteredUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/register/user")
@RequiredArgsConstructor
public class RegistrationUserController implements RegistrationUserApi {

    private final RegisteredUserService userService;

    @Override
    public ResponseEntity<String> registerUser(UserRegistrationDto registrationDto) {
        String id = userService.registerUser(registrationDto);
        return ResponseEntity.status(HttpStatus.CREATED).body("User registered successfully with ID: " + id);
    }

    @Override
    public ResponseEntity<String> updateUser(String id, UserRegistrationDto registrationDto) {
        userService.updateUser(id, registrationDto);
        return ResponseEntity.ok("User updated successfully");
    }
}
