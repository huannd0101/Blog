package com.example.blog_be.repository;

import com.example.blog_be.models.Post;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostRepository extends JpaRepository<Post, Long> {
    List<Post> findAllByTitleContainingOrContentContaining(String key, String key2);
}
