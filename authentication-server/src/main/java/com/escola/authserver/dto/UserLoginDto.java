package com.escola.authserver.dto;

import lombok.Data;

import java.util.List;

@Data
public class UserLoginDto {

    private String username;
    private String password;
    private List<String> authorities;
}
