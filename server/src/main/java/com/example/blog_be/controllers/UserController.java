package com.example.blog_be.controllers;

import com.example.blog_be.dto.UserDTO;
import com.example.blog_be.models.User;
import com.example.blog_be.services.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController extends BaseController<User> {
    @Autowired private IUserService userService;

    @GetMapping
    public ResponseEntity<?> getAllUser() {
        return this.resListSuccess(userService.getAllUser());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getUserById(@PathVariable(name = "id") Long id) {
        return this.resSuccess(userService.getUserById(id));
    }

    @PostMapping
    public ResponseEntity<?> createNewUser(@RequestBody UserDTO userDTO){
        return this.resSuccess(userService.createNewUser(userDTO));
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> editUserById(
            @PathVariable(name = "id") Long id,
            @RequestBody UserDTO userDTO) {
        return this.resSuccess(userService.editUserById(id, userDTO));
    }
}
