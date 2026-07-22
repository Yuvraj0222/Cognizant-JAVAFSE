package com.cognizant.factory;

/**
 * Concrete Creator overriding the factory method to return a Word Document.
 */
public class WordDocumentFactory extends DocumentFactory {
    @Override
    public Document createDocument() {
        return new WordDocument();
    }
}
