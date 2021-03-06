package com.example.blog_be.models;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "post_comments")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class PostComment extends BaseEntity {
    @NotBlank
    private String content;
    @NotBlank
    private String name;
    @Email
    private String email;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "post_id")
    private Post post;

}
