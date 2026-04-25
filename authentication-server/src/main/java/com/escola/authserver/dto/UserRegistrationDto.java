package com.escola.authserver.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Details for registering or updating a user")
public class UserRegistrationDto {
    
    @Schema(description = "Unique username", example = "rockonmahi")
    private String userName;
    
    @Schema(description = "User password", example = "test")
    private String password;
    
    @Schema(description = "Full name of the user", example = "Mahendra Pratap Singh")
    private String fullName;
    
    @Schema(description = "First name", example = "Mahendra")
    private String firstName;
    
    @Schema(description = "Middle name", example = "Pratap")
    private String middleName;
    
    @Schema(description = "Last name", example = "Singh")
    private String lastName;
}
