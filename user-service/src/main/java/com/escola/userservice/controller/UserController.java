package com.escola.userservice.controller;

import com.escola.userservice.dto.UserLoginDto;
import com.escola.userservice.form.UserLoginForm;
import com.escola.userservice.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import com.escola.userservice.entity.User;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {
    private static final Logger LOGGER
            = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public UserLoginDto userDetails(@RequestBody UserLoginForm userLogin) {
        return userService.getUserDetails(userLogin);
    }
}
