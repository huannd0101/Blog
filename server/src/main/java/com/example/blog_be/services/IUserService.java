package com.example.blog_be.services;

import com.example.blog_be.dto.UserDTO;
import com.example.blog_be.models.User;

import java.util.List;

public interface IUserService {
    List<User> getAllUser();
    User getUserById(Long id);
    User getUserByUsername(String username);
    User createNewUser(UserDTO userDTO);
    User editUserById(Long id, UserDTO userDTO);
    User save(User user);
}
