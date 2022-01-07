package com.example.blog_be.controllers;

import com.example.blog_be.dto.PostDTO;
import com.example.blog_be.dto.UserDTO;
import com.example.blog_be.models.Post;
import com.example.blog_be.services.IPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/posts")
public class PostController extends BaseController<Post> {
    @Autowired private IPostService postService;

    @GetMapping
    public ResponseEntity<?> getAllPost() {
        return this.resListSuccess(postService.getAllPost());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getPostById(@PathVariable(name = "id") Long id) {
        return this.resSuccess(postService.getPostById(id));
    }

    @PostMapping("/{userId}")
    public ResponseEntity<?> createNewPost(
            @PathVariable("userId") Long userId,
            @RequestBody PostDTO postDTO){
        return this.resSuccess(postService.createNewPost(postDTO, userId));
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> editPostById(
            @PathVariable(name = "id") Long id,
            @RequestBody PostDTO postDTO) {
        return this.resSuccess(postService.editPostById(id, postDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletePostById(@PathVariable(name = "id") Long id) {
        return this.resSuccess(postService.deletePostById(id));
    }

    @GetMapping("/search")
    public ResponseEntity<?> searchPostByKey(@RequestParam("key") String key) {
        return this.resListSuccess(postService.searchPostByKey(key));
    }
}
