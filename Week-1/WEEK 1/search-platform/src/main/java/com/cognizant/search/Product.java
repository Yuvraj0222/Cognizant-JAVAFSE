package com.cognizant.search;

import java.util.Objects;

/**
 * Entity representing a Product in the E-commerce platform.
 * Implements Comparable to enable natural sorting based on productId.
 */
public class Product implements Comparable<Product> {

    private int productId;
    private String productName;
    private String category;

    // No-argument constructor
    public Product() {
    }

    // Parameterized constructor
    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    // Getters and Setters
    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    // Override equals and hashCode for accurate product comparisons
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Product product = (Product) o;
        return productId == product.productId && 
               Objects.equals(productName, product.productName) && 
               Objects.equals(category, product.category);
    }

    @Override
    public int hashCode() {
        return Objects.hash(productId, productName, category);
    }

    // Override toString() for display representations
    @Override
    public String toString() {
        return "Product [ID=" + productId + ", Name=" + productName + ", Category=" + category + "]";
    }

    /**
     * Compares products based on their unique ID (ascending order).
     * Necessary for Arrays.sort() during Binary Search preparation.
     */
    @Override
    public int compareTo(Product other) {
        return Integer.compare(this.productId, other.productId);
    }
}
