package com.example.blog_be.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "contacts")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Contact extends BaseEntity {
    @NotBlank
    private String name;
    @Email
    private String email;
    @NotBlank
    private String message;

}
