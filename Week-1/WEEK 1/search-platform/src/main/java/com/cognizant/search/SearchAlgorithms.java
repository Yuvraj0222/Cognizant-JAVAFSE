package com.cognizant.search;

import java.util.Arrays;

/**
 * Class containing Linear Search and Binary Search algorithms for Product catalogs.
 */
public class SearchAlgorithms {

    /**
     * Performs linear search to find a product by ID.
     * Time Complexity: O(n) worst case, O(1) best case.
     * Space Complexity: O(1) auxiliary space.
     *
     * @param products  The array of products.
     * @param productId The product ID to search.
     * @return The matching Product or null if not found.
     */
    public static Product linearSearch(Product[] products, int productId) {
        int comparisons = 0;
        for (int i = 0; i < products.length; i++) {
            comparisons++;
            if (products[i].getProductId() == productId) {
                System.out.println("Linear Search: Found after " + comparisons + " comparisons.");
                return products[i];
            }
        }
        System.out.println("Linear Search: Not found after " + comparisons + " comparisons.");
        return null;
    }

    /**
     * Performs iterative binary search to find a product by ID.
     * Note: The input array must be sorted.
     * Time Complexity: O(log n) worst case, O(1) best case.
     * Space Complexity: O(1) auxiliary space.
     *
     * @param products  The array of products.
     * @param productId The product ID to search.
     * @return The matching Product or null if not found.
     */
    public static Product binarySearch(Product[] products, int productId) {
        // Enforce sorting before searching
        Arrays.sort(products);

        int low = 0;
        int high = products.length - 1;
        int comparisons = 0;

        while (low <= high) {
            comparisons++;
            int mid = low + (high - low) / 2; // Prevents integer overflow
            int midId = products[mid].getProductId();

            if (midId == productId) {
                System.out.println("Binary Search (Iterative): Found after " + comparisons + " comparisons.");
                return products[mid];
            }

            if (midId < productId) {
                low = mid + 1; // Search right half
            } else {
                high = mid - 1; // Search left half
            }
        }

        System.out.println("Binary Search (Iterative): Not found after " + comparisons + " comparisons.");
        return null;
    }

    /**
     * Performs recursive binary search to find a product by ID.
     * Note: The input array must be sorted.
     * Time Complexity: O(log n) worst/average case, O(1) best case.
     * Space Complexity: O(log n) call stack memory due to recursion.
     *
     * @param products  The array of products.
     * @param productId The product ID to search.
     * @param low       The lower index boundary.
     * @param high      The upper index boundary.
     * @return The matching Product or null if not found.
     */
    public static Product binarySearchRecursive(Product[] products, int productId, int low, int high) {
        return binarySearchRecursiveHelper(products, productId, low, high, 1);
    }

    private static Product binarySearchRecursiveHelper(Product[] products, int productId, int low, int high, int depth) {
        if (low > high) {
            System.out.println("Binary Search (Recursive): Not found after " + (depth - 1) + " recursion steps.");
            return null;
        }

        int mid = low + (high - low) / 2;
        int midId = products[mid].getProductId();

        if (midId == productId) {
            System.out.println("Binary Search (Recursive): Found after " + depth + " recursion steps.");
            return products[mid];
        }

        if (midId < productId) {
            return binarySearchRecursiveHelper(products, productId, mid + 1, high, depth + 1);
        } else {
            return binarySearchRecursiveHelper(products, productId, low, mid - 1, depth + 1);
        }
    }
}
