package com.example.blog_be.services.imp;

import com.example.blog_be.dto.UserDTO;
import com.example.blog_be.exceptions.DuplicateException;
import com.example.blog_be.exceptions.NotFoundException;
import com.example.blog_be.models.User;
import com.example.blog_be.repository.UserRepository;
import com.example.blog_be.services.IUserService;
import com.example.blog_be.utils.ConvertObject;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImp implements IUserService {
    @Autowired private UserRepository userRepository;
    @Autowired private ModelMapper modelMapper;
    @Autowired private PasswordEncoder passwordEncoder;

    @Override
    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    @Override
    public User getUserById(Long id) {
        return userRepository.findById(id).orElseThrow(() -> {
            throw new NotFoundException("Can't find user by id " + id);
        });
    }

    @Override
    public User getUserByUsername(String username) {
        User user = userRepository.findByUsername(username);
        if(user != null) {
            return user;
        }
        throw new NotFoundException("Can't find user by username: " + username);
    }

    @Override
    public User createNewUser(UserDTO userDTO) {
        User user = modelMapper.map(userDTO, User.class);

        if(userRepository.findByUsername(user.getUsername()) != null) {
            throw new DuplicateException("Duplicate username: " + user.getUsername());
        }
        if(userRepository.findByEmail(user.getEmail()) != null) {
            throw new DuplicateException("Duplicate email: " + user.getEmail());
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));

        return userRepository.save(user);
    }

    @Override
    public User editUserById(Long id, UserDTO userDTO) {
        Optional<User> user = userRepository.findById(id);
        if(user.isEmpty()) {
            throw new NotFoundException("Can not find user by id: " + id);
        }

        return userRepository.save(ConvertObject.convertUserDTOToUser(user.get(), userDTO));
    }

    @Override
    public User save(User user) {
        return userRepository.save(user);
    }
}
