package com.library;

import com.library.service.BookService;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Main application runner to bootstrap Spring container and call the library service.
 */
public class MainApp {

    public static void main(String[] args) {
        // Load the Spring ApplicationContext using ClassPathXmlApplicationContext (closed via try-with-resources)
        try (ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml")) {
            
            // Retrieve the BookService bean from the Spring container
            BookService bookService = context.getBean("bookService", BookService.class);
            
            // Invoke the business operation
            bookService.displayBooks();
        }
    }
}
