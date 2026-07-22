package com.library.service;

import com.library.repository.BookRepository;

/**
 * Service class exposing business logic operations for Books.
 */
public class BookService {

    private BookRepository bookRepository;

    // Setter method for property/setter injection from Spring XML configuration
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    /**
     * Delegates displaying books to the injected repository.
     */
    public void displayBooks() {
        bookRepository.displayBooks();
    }
}
