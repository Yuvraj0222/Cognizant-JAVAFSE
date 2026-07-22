package com.cognizant.factory;

/**
 * Concrete Product representing a Word Document.
 */
public class WordDocument implements Document {
    @Override
    public void open() {
        System.out.println("Word Document is opened.");
    }
}
