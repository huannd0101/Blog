package com.example.blog_be.services.imp;

import com.example.blog_be.dto.ContactDTO;
import com.example.blog_be.exceptions.NotFoundException;
import com.example.blog_be.models.Contact;
import com.example.blog_be.repository.ContactRepository;
import com.example.blog_be.services.IContactService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContactServiceImp implements IContactService {
    @Autowired private ContactRepository contactRepository;
    @Autowired private ModelMapper modelMapper;

    @Override
    public List<Contact> getAllContact() {
        return contactRepository.findAll();
    }

    @Override
    public Contact getContactById(Long id) {
        Optional<Contact> contact = contactRepository.findById(id);
        return contact.orElseThrow(() -> {
           throw new NotFoundException("Can't find contact by id " + id);
        });
    }

    @Override
    public Contact createNewContact(ContactDTO contactDTO) {
        return contactRepository.save(modelMapper.map(contactDTO, Contact.class));
    }

    @Override
    public Contact deleteContactById(Long id) {
        Optional<Contact> contact = contactRepository.findById(id);
        if(contact.isEmpty()) {
            throw new NotFoundException("Can't find contact by id " + id);
        }
        contactRepository.deleteById(id);
        return contact.get();
    }
}
