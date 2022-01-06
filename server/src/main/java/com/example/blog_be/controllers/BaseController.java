package com.example.blog_be.controllers;

import com.example.blog_be.dto.ResponseDTO;
import com.example.blog_be.utils.ResponseMessageEnum;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;

public class BaseController<T> {
    public ResponseEntity<?> resSuccess(T data) {
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseDTO<T>(HttpStatus.OK.value(), ResponseMessageEnum.SUCCESS, data)
        );
    }

    public ResponseEntity<?> resListSuccess(List<T> list) {
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseDTO<>(HttpStatus.OK.value(), ResponseMessageEnum.SUCCESS, list)
        );
    }

    public ResponseEntity<?> resFailed() {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                new ResponseDTO<>(HttpStatus.BAD_REQUEST.value(), ResponseMessageEnum.ERROR, "Failed")
        );
    }
}