package com.cognizant.factory;

/**
 * Concrete Product representing a PDF Document.
 */
public class PdfDocument implements Document {
    @Override
    public void open() {
        System.out.println("PDF Document is opened.");
    }
}
