package com.cognizant.factory;

/**
 * Concrete Product representing an Excel Document.
 */
public class ExcelDocument implements Document {
    @Override
    public void open() {
        System.out.println("Excel Document is opened.");
    }
}
