package com.example.blog_be.services;

import com.example.blog_be.dto.PostDTO;
import com.example.blog_be.models.Post;

import java.util.List;

public interface IPostService {
    List<Post> getAllPost();
    Post getPostById(Long id);
    Post createNewPost(PostDTO postDTO, Long userId);
    Post editPostById(Long id, PostDTO postDTO);
    Post deletePostById(Long id);
}
