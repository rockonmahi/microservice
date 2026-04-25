package com.escola.authserver.api;

import com.escola.authserver.dto.UserRegistrationDto;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Tag(name = "User Registration", description = "Endpoints for registering and updating users")
public interface RegistrationUserApi {

    @Operation(summary = "Register a new user", description = "Creates a new user account with the provided details.")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "201", description = "User registered successfully"),
        @ApiResponse(responseCode = "400", description = "Invalid user details provided")
    })
    @PostMapping
    ResponseEntity<String> registerUser(@RequestBody UserRegistrationDto registrationDto);

    @Operation(summary = "Update an existing user", description = "Updates the details of an existing user identified by ID.")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "User updated successfully"),
        @ApiResponse(responseCode = "404", description = "User not found")
    })
    @PutMapping("/{id}")
    ResponseEntity<String> updateUser(@PathVariable String id, @RequestBody UserRegistrationDto registrationDto);
}
