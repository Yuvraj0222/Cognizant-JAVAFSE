package com.cognizant.factory;

/**
 * Test class to execute the Factory Method Design Pattern.
 */
public class FactoryMethodTest {

    public static void main(String[] args) {
        // Instantiate concrete creators (factories)
        DocumentFactory wordFactory = new WordDocumentFactory();
        DocumentFactory pdfFactory = new PdfDocumentFactory();
        DocumentFactory excelFactory = new ExcelDocumentFactory();

        // Create document instances dynamically via their factories
        Document wordDoc = wordFactory.createDocument();
        Document pdfDoc = pdfFactory.createDocument();
        Document excelDoc = excelFactory.createDocument();

        // Invoke business operations on the documents
        wordDoc.open();
        System.out.println();
        
        pdfDoc.open();
        System.out.println();
        
        excelDoc.open();
    }
}
