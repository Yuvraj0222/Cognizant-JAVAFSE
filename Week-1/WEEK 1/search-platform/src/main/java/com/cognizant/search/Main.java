package com.cognizant.search;

import java.util.Arrays;

/**
 * Main application class demonstrating Linear Search vs Binary Search.
 */
public class Main {

    public static void main(String[] args) {
        // Initialize sample product catalog (minimum 10 products)
        Product[] products = {
            new Product(105, "Phone", "Electronics"),
            new Product(102, "Mouse", "Electronics"),
            new Product(108, "Bag", "Accessories"),
            new Product(101, "Laptop", "Electronics"),
            new Product(107, "Watch", "Fashion"),
            new Product(103, "Keyboard", "Electronics"),
            new Product(110, "Camera", "Electronics"),
            new Product(104, "Monitor", "Electronics"),
            new Product(106, "Shoes", "Fashion"),
            new Product(109, "Printer", "Electronics")
        };

        System.out.println("E-COMMERCE CATALOG SEARCH INITIALIZED");
        System.out.println("------------------------------------------------------------------");
        System.out.println("Original catalog items (unsorted):");
        for (Product p : products) {
            System.out.println("  " + p);
        }
        System.out.println("------------------------------------------------------------------\n");

        // Test Case 1: Searching for an EXISTING product (ID: 107)
        int targetId1 = 107;
        System.out.println("TEST CASE 1: Search for existing product ID " + targetId1);
        System.out.println("------------------------------------------------------------------");
        
        // 1. Linear Search
        Product p1Linear = SearchAlgorithms.linearSearch(products, targetId1);
        System.out.println("Linear Search Result: " + p1Linear);
        System.out.println();

        // 2. Binary Search (Iterative) - Requires Sorting first
        // We clone and sort to avoid altering the original catalog printout order
        Product[] sortedProducts = products.clone();
        Arrays.sort(sortedProducts);
        
        Product p1BinaryIterative = SearchAlgorithms.binarySearch(sortedProducts, targetId1);
        System.out.println("Binary Search (Iterative) Result: " + p1BinaryIterative);
        System.out.println();

        // 3. Binary Search (Recursive)
        Product p1BinaryRecursive = SearchAlgorithms.binarySearchRecursive(sortedProducts, targetId1, 0, sortedProducts.length - 1);
        System.out.println("Binary Search (Recursive) Result: " + p1BinaryRecursive);
        System.out.println("------------------------------------------------------------------\n");

        // Test Case 2: Searching for a NON-EXISTING product (ID: 999)
        int targetId2 = 999;
        System.out.println("TEST CASE 2: Search for non-existing product ID " + targetId2);
        System.out.println("------------------------------------------------------------------");
        
        Product p2Linear = SearchAlgorithms.linearSearch(products, targetId2);
        System.out.println("Linear Search Result: " + p2Linear);
        System.out.println();

        Product p2BinaryIterative = SearchAlgorithms.binarySearch(sortedProducts, targetId2);
        System.out.println("Binary Search (Iterative) Result: " + p2BinaryIterative);
        System.out.println();

        Product p2BinaryRecursive = SearchAlgorithms.binarySearchRecursive(sortedProducts, targetId2, 0, sortedProducts.length - 1);
        System.out.println("Binary Search (Recursive) Result: " + p2BinaryRecursive);
        System.out.println("------------------------------------------------------------------\n");

        // Display Comparative Performance Analytics
        SearchAnalysis.printAnalysis();
    }
}
