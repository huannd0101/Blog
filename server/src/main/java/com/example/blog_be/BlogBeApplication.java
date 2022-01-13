package com.example.blog_be;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Arrays;
import java.util.StringJoiner;

@SpringBootApplication
public class BlogBeApplication {
    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }

    public static void main(String[] args) {
        SpringApplication.run(BlogBeApplication.class, args);

//        for(int i=0, m=++i; m<2*i; i++, m+=i) {
//            System.out.println(i);
//            System.out.println(m);
//        }


    }

}
