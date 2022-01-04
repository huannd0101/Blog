package com.example.blog_be.services;

import com.example.blog_be.payload.AuthenticationRequest;
import com.example.blog_be.payload.AuthenticationResponse;

import javax.security.auth.login.LoginException;
import java.io.InvalidObjectException;

public interface IAuthService {
    AuthenticationResponse login(AuthenticationRequest request) throws LoginException;
    Boolean validateToken(AuthenticationResponse authenticationResponse) throws InvalidObjectException;
}
