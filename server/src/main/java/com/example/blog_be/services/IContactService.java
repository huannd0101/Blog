package com.example.blog_be.services;

import com.example.blog_be.dto.ContactDTO;
import com.example.blog_be.models.Contact;

import java.util.List;

public interface IContactService {
    List<Contact> getAllContact();;
    Contact getContactById(Long id);
    Contact createNewContact(ContactDTO contactDTO);
    Contact deleteContactById(Long id);
}
