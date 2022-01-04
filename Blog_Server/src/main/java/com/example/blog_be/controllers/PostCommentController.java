package com.example.blog_be.controllers;

import com.example.blog_be.dto.PostCommentDTO;
import com.example.blog_be.dto.PostDTO;
import com.example.blog_be.models.PostComment;
import com.example.blog_be.services.IPostCommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/post-comments")
public class PostCommentController extends BaseController<PostComment> {
    @Autowired private IPostCommentService service;

    @GetMapping
    public ResponseEntity<?> getAllComment() {
        return this.resListSuccess(service.getAllPostComment());
    }

    @GetMapping("/{idUser}")
    public ResponseEntity<?> getAllCommentByIdUser(@PathVariable(name = "idUser") Long idUser) {
        return this.resListSuccess(service.getAllPostCommentByPostId(idUser));
    }

    @GetMapping("/{id}/detail")
    public ResponseEntity<?> getPostCommentById(@PathVariable(name = "id") Long id) {
        return this.resSuccess(service.getPostCommentById(id));
    }

    @PostMapping("/{postId}")
    public ResponseEntity<?> createNewPostComment(
            @PathVariable("postId") Long postId,
            @RequestBody PostCommentDTO postCommentDTO){
        return this.resSuccess(service.createNewPostComment(postCommentDTO, postId));
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> editPostCommentById(
            @PathVariable(name = "id") Long id,
            @RequestBody PostCommentDTO postCommentDTO) {
        return this.resSuccess(service.editPostCommentById(id, postCommentDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletePostCommentById(@PathVariable(name = "id") Long id) {
        return this.resSuccess(service.deleteById(id));
    }
}
