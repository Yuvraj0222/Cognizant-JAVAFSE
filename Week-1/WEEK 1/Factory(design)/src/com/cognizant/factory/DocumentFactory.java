package com.cognizant.factory;

/**
 * Abstract Creator class declaring the Factory Method to produce Documents.
 */
public abstract class DocumentFactory {

    /**
     * Factory Method to be overridden by subclasses to create specific document types.
     *
     * @return A newly instantiated Document product.
     */
    public abstract Document createDocument();
}
