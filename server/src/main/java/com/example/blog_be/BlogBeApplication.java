package com.example.blog_be;

import com.example.blog_be.models.User;
import com.example.blog_be.repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Arrays;
import java.util.StringJoiner;

@SpringBootApplication
public class BlogBeApplication {
    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public static void main(String[] args) {
        SpringApplication.run(BlogBeApplication.class, args);

    }

    @Bean
    CommandLineRunner init() {
        return (args -> {
            if (userRepository.count() == 0) {
                User user = new User("Admin", "admin", passwordEncoder.encode("admin"), "example@gmail.com", null);
                userRepository.save(user);
            }
        });
    }

}
