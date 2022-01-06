package com.example.blog_be.services.imp;

import com.example.blog_be.dto.PostCommentDTO;
import com.example.blog_be.exceptions.NotFoundException;
import com.example.blog_be.models.PostComment;
import com.example.blog_be.repository.PostCommentRepository;
import com.example.blog_be.services.IPostCommentService;
import com.example.blog_be.services.IPostService;
import com.example.blog_be.utils.ConvertObject;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostCommentServiceImp implements IPostCommentService {
    @Autowired private ModelMapper modelMapper;
    @Autowired private PostCommentRepository postCommentRepository;
    @Autowired private IPostService postService;

    @Override
    public List<PostComment> getAllPostComment() {
        return postCommentRepository.findAll();
    }

    @Override
    public List<PostComment> getAllPostCommentByPostId(Long postId) {
        return postCommentRepository.findAllByPostId(postId);
    }

    @Override
    public PostComment getPostCommentById(Long id) {
        Optional<PostComment> postComment = postCommentRepository.findById(id);
        return postComment.orElseThrow(() -> {
            throw new NotFoundException("Can't find postComment by id " + id);
        });
    }

    @Override
    public PostComment createNewPostComment(PostCommentDTO postCommentDTO, Long idPost) {
        PostComment postComment = modelMapper.map(postCommentDTO, PostComment.class);
        postComment.setPost(postService.getPostById(idPost));
        return postCommentRepository.save(postComment);
    }

    @Override
    public PostComment editPostCommentById(Long id, PostCommentDTO postCommentDTO) {
        Optional<PostComment> postComment = postCommentRepository.findById(id);
        if(postComment.isEmpty()) {
            throw new NotFoundException("Can't find postComment by id " + id);
        }
        return postCommentRepository.save(ConvertObject.convertPostCommentDTOToComment(postComment.get(), postCommentDTO));
    }

    @Override
    public PostComment deleteById(Long id) {
        Optional<PostComment> postComment = postCommentRepository.findById(id);
        if(postComment.isEmpty()) {
            throw new NotFoundException("Can't find postComment by id " + id);
        }
        postCommentRepository.deleteById(id);
        return postComment.get();
    }
}
