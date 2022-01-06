package com.example.blog_be.services;

import com.example.blog_be.dto.PostCommentDTO;
import com.example.blog_be.models.PostComment;

import java.util.List;

public interface IPostCommentService {
    List<PostComment> getAllPostComment();
    List<PostComment> getAllPostCommentByPostId(Long postId);
    PostComment getPostCommentById(Long id);
    PostComment createNewPostComment(PostCommentDTO postCommentDTO, Long postId);
    PostComment editPostCommentById(Long id, PostCommentDTO postCommentDTO);
    PostComment deleteById(Long id);
}
