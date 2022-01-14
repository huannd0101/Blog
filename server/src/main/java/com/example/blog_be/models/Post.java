package com.example.blog_be.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "posts")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Post extends BaseEntity {
    @NotBlank
    private String title;
    @NotBlank
    private String content;
    private Boolean hightlight;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "users_id")
    private User user;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "post")
    @JsonIgnore
    private Set<PostComment> postComments = new HashSet<>();

    public void addRelationPostComment(PostComment postComment) {
        postComments.add(postComment);
        postComment.setPost(this);
    }
    public void deleteRelationPost(PostComment postComment) {
        postComments.remove(postComment);
        postComment.setPost(null);
    }
}
