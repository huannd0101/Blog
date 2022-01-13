package com.example.blog_be.services.imp;

import com.example.blog_be.dto.PostDTO;
import com.example.blog_be.exceptions.NotFoundException;
import com.example.blog_be.models.Post;
import com.example.blog_be.models.User;
import com.example.blog_be.repository.PostRepository;
import com.example.blog_be.services.IPostService;
import com.example.blog_be.services.IUserService;
import com.example.blog_be.utils.ConvertObject;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostServiceImp implements IPostService {
    @Autowired private PostRepository postRepository;
    @Autowired private ModelMapper modelMapper;
    @Autowired private IUserService userService;

    @Override
    public List<Post> getAllPost() {
        return postRepository.findAll();
    }

    @Override
    public List<Post> searchPostByKey(String key) {
        return postRepository.findAllByTitleContainingOrContentContaining(key, key);
    }

    @Override
    public Post getPostById(Long id) {
        Optional<Post> post = postRepository.findById(id);
        if(post.isEmpty()) {
            throw new NotFoundException("Can't find post by id " + id);
        }
        return post.get();
    }

    @Override
    public Post createNewPost(PostDTO postDTO, Long userId) {
        Post post = modelMapper.map(postDTO, Post.class);
        User user = userService.getUserById(userId);

        Post newPost = postRepository.save(post);
        user.addRelationPost(newPost);
        userService.save(user);
        return postRepository.save(newPost);
    }

    @Override
    public Post editPostById(Long id, PostDTO postDTO) {
        Optional<Post> post = postRepository.findById(id);
        if(post.isEmpty()) {
            throw new NotFoundException("Can not find post by id: " + id);
        }

        return postRepository.save(ConvertObject.convertPostDTOToPost(post.get(), postDTO));
    }

    @Override
    public Post deletePostById(Long id) {
        Optional<Post> post = postRepository.findById(id);
        if(post.isEmpty()) {
            throw new NotFoundException("Can not find post by id: " + id);
        }
        User user = post.get().getUser();

        user.deleteRelationPost(post.get());
        userService.save(user);

        postRepository.deleteById(post.get().getId());
        return post.get();
    }

    @Override
    public Post save(Post post) {
        return postRepository.save(post);
    }
}
