package com.example.blog_be.repository;

import com.example.blog_be.models.Post;
import com.example.blog_be.models.PostComment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostCommentRepository extends JpaRepository<PostComment, Long> {
    List<PostComment> findAllByPostId(Long id);
}
