package com.example.blog_be.controllers;

import com.example.blog_be.dto.ContactDTO;
import com.example.blog_be.models.Contact;
import com.example.blog_be.services.IContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contacts")
public class ContactController extends BaseController<Contact> {
    @Autowired
    private IContactService service;

    @GetMapping
    public ResponseEntity<?> getAllContact() {
        return this.resListSuccess(service.getAllContact());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getContactById(@PathVariable(name = "id") Long id) {
        return this.resSuccess(service.getContactById(id));
    }

    @PostMapping
    public ResponseEntity<?> createNewContact(@RequestBody ContactDTO contactDTO){
        return this.resSuccess(service.createNewContact(contactDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteContactById(@PathVariable(name = "id") Long id) {
        return this.resSuccess(service.deleteContactById(id));
    }
}
