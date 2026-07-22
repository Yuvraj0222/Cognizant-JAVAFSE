package com.cognizant.factory;

/**
 * Concrete Creator overriding the factory method to return an Excel Document.
 */
public class ExcelDocumentFactory extends DocumentFactory {
    @Override
    public Document createDocument() {
        return new ExcelDocument();
    }
}
