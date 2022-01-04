package com.example.blog_be.services.imp;

import com.example.blog_be.models.User;
import com.example.blog_be.payload.AuthenticationRequest;
import com.example.blog_be.payload.AuthenticationResponse;
import com.example.blog_be.services.IAuthService;
import com.example.blog_be.services.IUserService;
import com.example.blog_be.services.MyUserDetailsService;
import com.example.blog_be.utils.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.security.auth.login.LoginException;
import java.io.InvalidObjectException;

@Service
public class AuthServiceImp implements IAuthService {
    @Autowired private JwtUtil jwtUtil;

    @Autowired private MyUserDetailsService myUserDetailsService;

    @Autowired private AuthenticationManager authenticationManager;

    @Autowired private IUserService userService;

    @Override
    public AuthenticationResponse login(AuthenticationRequest request) throws LoginException {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                    request.getUsername(), request.getPassword()
            ));
        }catch (BadCredentialsException e) {
            throw new LoginException("Incorrect username or password");
        }

        final UserDetails userDetails = myUserDetailsService.loadUserByUsername(request.getUsername());
        final String jwt = jwtUtil.generateToken(userDetails);

        User user = userService.getUserByUsername(request.getUsername());

        return new AuthenticationResponse(jwt, user.getId(), user.getUsername());
    }

    @Override
    public Boolean validateToken(AuthenticationResponse authenticationResponse) throws InvalidObjectException {
        try {
            String jwt = authenticationResponse.getJwt();
            String username = jwtUtil.extractUsername(jwt);
            UserDetails userDetails = myUserDetailsService.loadUserByUsername(username);

            return jwtUtil.validateToken(jwt, userDetails);
        } catch (Exception e) {
            throw new InvalidObjectException(e.getMessage());
        }
    }
}
