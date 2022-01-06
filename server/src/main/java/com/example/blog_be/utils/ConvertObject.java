package com.example.blog_be.utils;

import com.example.blog_be.dto.PostCommentDTO;
import com.example.blog_be.dto.PostDTO;
import com.example.blog_be.dto.UserDTO;
import com.example.blog_be.models.Post;
import com.example.blog_be.models.PostComment;
import com.example.blog_be.models.User;

public class ConvertObject {
    public static User convertUserDTOToUser(User user, UserDTO userDTO) {
        user.setUsername(userDTO.getUsername());
        user.setEmail(userDTO.getEmail());
        user.setFullName(userDTO.getFullName());
        return user;
    }

    public static Post convertPostDTOToPost(Post post, PostDTO postDTO) {
        post.setTitle(postDTO.getTitle());
        post.setContent(postDTO.getContent());
        post.setHightlight(postDTO.getHightlight());
        return post;
    }

    public static PostComment convertPostCommentDTOToComment(PostComment postComment, PostCommentDTO postCommentDTO) {
        postComment.setContent(postCommentDTO.getContent());
        postComment.setEmail(postCommentDTO.getEmail());
        postComment.setName(postCommentDTO.getName());
        return postComment;
    }
}
