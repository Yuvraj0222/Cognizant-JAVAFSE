package com.cognizant.factory;

/**
 * Concrete Creator overriding the factory method to return a PDF Document.
 */
public class PdfDocumentFactory extends DocumentFactory {
    @Override
    public Document createDocument() {
        return new PdfDocument();
    }
}
