package com.example.blog_be.controllers;

import com.example.blog_be.payload.AuthenticationRequest;
import com.example.blog_be.payload.AuthenticationResponse;
import com.example.blog_be.services.IAuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.security.auth.login.LoginException;
import java.io.InvalidObjectException;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired private IAuthService authService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthenticationRequest authenticationRequest) throws LoginException {
        return ResponseEntity.ok(authService.login(authenticationRequest));
    }

    @PostMapping("/validate")
    public ResponseEntity<?> validateToken(@RequestBody AuthenticationResponse authenticationResponse)
            throws InvalidObjectException {
        return ResponseEntity.ok(authService.validateToken(authenticationResponse));
    }
}
