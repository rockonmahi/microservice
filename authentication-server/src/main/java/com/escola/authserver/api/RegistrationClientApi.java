package com.escola.authserver.api;

import com.escola.authserver.dto.ClientRegistrationDto;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Tag(name = "Client Registration", description = "Endpoints for registering OAuth2 clients with various grant types")
public interface RegistrationClientApi {

    @Operation(summary = "Register a new client with custom configuration", 
               description = "Allows full control over the client configuration during registration.")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "201", description = "Client registered successfully"),
        @ApiResponse(responseCode = "400", description = "Invalid client details provided")
    })
    @PostMapping
    ResponseEntity<String> registerClient(@RequestBody ClientRegistrationDto clientDto);

    @Operation(summary = "Register an Authorization Code flow client", 
               description = "Registers a client configured for Authorization Code and Refresh Token grant types.")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "201", description = "Client registered successfully")
    })
    @PostMapping("/authorization-code")
    ResponseEntity<String> registerAuthorizationCodeClient(@RequestBody ClientRegistrationDto clientDto);

    @Operation(summary = "Register a Client Credentials flow client", 
               description = "Registers a client configured for Client Credentials grant type.")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "201", description = "Client registered successfully")
    })
    @PostMapping("/client-credentials")
    ResponseEntity<String> registerClientCredentialsClient(@RequestBody ClientRegistrationDto clientDto);

    @Operation(summary = "Register a PKCE (Public Client) flow client", 
               description = "Registers a client configured for Authorization Code with PKCE and Refresh Token grant types, without a client secret requirement.")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "201", description = "Client registered successfully")
    })
    @PostMapping("/pkce")
    ResponseEntity<String> registerPkceClient(@RequestBody ClientRegistrationDto clientDto);

    @Operation(summary = "Register a Password flow client", 
               description = "Registers a client configured for legacy Resource Owner Password Credentials and Refresh Token grant types.")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "201", description = "Client registered successfully")
    })
    @PostMapping("/password")
    ResponseEntity<String> registerPasswordClient(@RequestBody ClientRegistrationDto clientDto);

    @Operation(summary = "Register a Device Code flow client", 
               description = "Registers a client configured for Device Authorization and Refresh Token grant types.")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "201", description = "Client registered successfully")
    })
    @PostMapping("/device-code")
    ResponseEntity<String> registerDeviceCodeClient(@RequestBody ClientRegistrationDto clientDto);
}
