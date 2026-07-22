# Theory & Q&A: Financial Forecasting Tool

This document contains detailed theoretical breakdowns, recursion call trace, time/space complexity analysis, memoization guidelines, troubleshooting steps, and interview preparation questions.

---

## 📘 Recursion & Complexity Fundamentals

### 1. What is Recursion?
Recursion is a programming technique where a method calls itself to solve smaller sub-problems of the same problem. Each call reduces the problem size until it reaches a termination condition.

### 2. Base Case vs. Recursive Case
- **Base Case**: The stopping condition that terminates recursion and prevents infinite loops (which result in a StackOverflowError).
  - In our program: `if (years == 0) return principal;`
- **Recursive Case**: The branch that performs a computation and calls the method again with modified arguments.
  - In our program: `return predictFutureValue(principal * (1 + growthRate), growthRate, years - 1);`

---

## 📐 Recursive Call Flow (Trace)

Below is a visual execution trace showing the call stack buildup and resolution for `predictFutureValue(100000, 0.10, 5)`:

```text
predictFutureValue(100000.0, 0.10, 5)
  ├── 100000.0 * 1.10 = 110000.0
  └── predictFutureValue(110000.0, 0.10, 4)
        ├── 110000.0 * 1.10 = 121000.0
        └── predictFutureValue(121000.0, 0.10, 3)
              ├── 121000.0 * 1.10 = 133100.0
              └── predictFutureValue(133100.0, 0.10, 2)
                    ├── 133100.0 * 1.10 = 146410.0
                    └── predictFutureValue(146410.0, 0.10, 1)
                          ├── 146410.0 * 1.10 = 161051.0
                          └── predictFutureValue(161051.0, 0.10, 0)
                                └── Returns 161051.0 (Base Case triggered!)
```

---

## 📊 Complexity Analysis

- **Time Complexity**: **$O(N)$** where $N$ is the number of years. The method executes exactly $N + 1$ times to compute the compound interest.
- **Space Complexity**: **$O(N)$** auxiliary space. Each recursive call allocates a stack frame on the JVM thread call stack. If $N$ is very large (e.g. 100,000 years), the program will crash with a `StackOverflowError`.

---

## 🌟 Optimizing with Memoization

**Memoization** is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

In this simple linear recursion problem, memoization is not strictly necessary because each value is computed exactly once. However, for tree-based recursions (like Fibonacci calculation), it is extremely useful.

### Optional: Memoized Implementation Example
```java
import java.util.HashMap;
import java.util.Map;

public class MemoizedForecast {
    // Map to cache calculations (Years -> Forecasted Value)
    private Map<Integer, Double> cache = new HashMap<>();

    public double predictFutureValueMemoized(double principal, double growthRate, int years) {
        if (years == 0) return principal;
        
        if (cache.containsKey(years)) {
            return cache.get(years);
        }
        
        double result = predictFutureValueMemoized(principal * (1 + growthRate), growthRate, years - 1);
        cache.put(years, result);
        return result;
    }
}
```

---

## ⚠️ Troubleshooting Common Errors

1. **`StackOverflowError`**:
   - *Cause*: Exceeding the maximum limit of the call stack. This happens if the base case is missing, incorrect, or if the number of years ($N$) is too large.
   - *Solution*: Double-check the base case `if (years == 0)` and ensure the parameter decrements (`years - 1`). For huge inputs, use an iterative loop instead of recursion.
2. **Precision Loss (`double` limitations)**:
   - *Cause*: Java's `double` type uses binary floating-point representation, which can introduce minor rounding errors.
   - *Solution*: For precise financial applications, use `java.math.BigDecimal` instead of `double`.

---

## 🎓 Interview Preparation Q&As

### 30 Beginner Questions
1. What is recursion?
2. What is a call stack?
3. What is a base case in recursion?
4. What is a recursive case?
5. What happens if a base case is missing?
6. What is a `StackOverflowError`?
7. What is the time complexity of our recursive forecasting algorithm?
8. What is the space complexity of our recursive forecasting algorithm?
9. Why does recursion use memory?
10. What is compound interest?
11. What parameters are passed to our recursive method?
12. What does `double` represent in Java?
13. What is the default access modifier in Java?
14. What is a package in Java?
15. How do you compile a Java file without Maven?
16. How do you run a compiled Java class file?
17. What is the JVM?
18. What is the stack area in JVM?
19. What is the heap area in JVM?
20. Explain compilation vs execution.
21. What is the recursive formula for compound interest?
22. What does `years - 1` do in the recursive call?
23. Can we write this program without classes?
24. What is static in Java?
25. Explain the difference between `float` and `double`.
26. What does `int` cast do?
27. Why do we format percentages?
28. What is Core Java?
29. How do you declare a package structure?
30. What is an IDE?

---

### 20 Intermediate Questions
31. Compare recursion and iteration in terms of performance and memory.
32. What is tail recursion, and how does it optimize stack usage?
33. Does Java support tail-call optimization (TCO)?
34. Why is `BigDecimal` preferred over `double` for financial data?
35. How does the JVM stack frames allocation work?
36. What is the maximum depth of the call stack by default in HotSpot JVM?
37. Explain the difference between recursion memory and heap memory.
38. What is memoization?
39. What is the difference between memoization and tabulation?
40. How does caching improve recursive complexity?
41. What is a tree recursion? Contrast it with linear recursion.
42. Give an example of a problem where recursion is cleaner than iteration.
43. How does the Java class loader find the Main class?
44. Explain the difference between source path and classpath.
45. How does JVM handle argument passing?
46. What is pass-by-value in Java?
47. How do you control the stack size of JVM programmatically?
48. What is the `-Xss` flag?
49. What is floating-point arithmetic precision error?
50. What is dynamic programming?

---

### 10 Advanced Questions
51. Analyze tail-call elimination limitations in Java compiler due to security/stack-frame constraints.
52. Compare call stack overhead in Java with languages like Scala or Haskell that support native TCO.
53. Explain the garbage collection implications of deep recursion allocations.
54. Design a recursive method utilizing `BigDecimal` for financial interest.
55. Explain why Java compiler doesn't auto-convert recursion to loops.
56. How do you debug a recursive program step-by-step in Eclipse/VS Code?
57. Explain how memoization can be implemented thread-safely in Java.
58. What is a stack trace, and how is it generated from thread execution?
59. How does CPU branch prediction impact recursive execution loops?
60. Explain the difference between call stacks in virtual threads (Java 21) vs platform threads.

---

### 25 Viva Questions & Answers

1. **Q: What is the main class name of this project?**
   - *A*: `Main` (package `com.cognizant.forecasting`).
2. **Q: Which recursive class contains the forecasting method?**
   - *A*: `FinancialForecast`.
3. **Q: What is the signature of the recursive forecasting method?**
   - *A*: `public double predictFutureValue(double principal, double growthRate, int years)`.
4. **Q: What is the base case condition in the code?**
   - *A*: `if (years == 0) return principal;`.
5. **Q: What parameters were used to test the code?**
   - *A*: Principal = 100000, Growth Rate = 0.10 (10%), Years = 5.
6. **Q: What is the output returned for these test parameters?**
   - *A*: `161051.0`.
7. **Q: What is the time complexity of the algorithm?**
   - *A*: $O(N)$ where $N$ is the number of years.
8. **Q: What is the space complexity and why?**
   - *A*: $O(N)$ because each recursion call adds a stack frame to the memory call stack.
9. **Q: What error occurs if `years - 1` is changed to `years`?**
   - *A*: `StackOverflowError` due to infinite recursion.
10. **Q: How does the program prevent stack overflow for standard inputs?**
    - *A*: By checking the base case `years == 0` and decrementing `years` by 1 on each call.
11. **Q: Why is there no `pom.xml` in this project?**
    - *A*: Because the project is written in Core Java without Maven build configurations.
12. **Q: Where is the source code stored?**
    - *A*: In the `src/com/cognizant/forecasting/` directory.
13. **Q: How can we run the class files from a terminal?**
    - *A*: Run `java -cp bin com.cognizant.forecasting.Main` after compiling.
14. **Q: What is the value of `growthRate` parameter?**
    - *A*: `0.10` representing 10%.
15. **Q: What is memoization?**
    - *A*: Caching results of expensive function calls to avoid redundant computations.
16. **Q: Does this project require memoization to run efficiently?**
    - *A*: No, because it is a simple linear recursion ($O(N)$) and does not compute overlapping sub-problems.
17. **Q: Can this algorithm be converted to an iterative loop?**
    - *A*: Yes, using a standard `for` or `while` loop, which reduces space complexity to $O(1)$.
18. **Q: What compiler command compiles the code?**
    - *A*: `javac`.
19. **Q: What is the JVM stack memory?**
    - *A*: Memory allocated per thread to store local variables and call details.
20. **Q: What does the print statement output for Growth Rate?**
    - *A*: `Growth Rate : 10%`.
21. **Q: Is there any external library in this project?**
    - *A*: No, it uses only standard library classes.
22. **Q: What happens to the principal on each recursive step?**
    - *A*: It is multiplied by `1 + growthRate` (e.g. `110000.0`, `121000.0`, etc.).
23. **Q: What is compound growth?**
    - *A*: Growth calculated on the accumulated principal plus previously accumulated growth.
24. **Q: How does recursion represent compound growth?**
    - *A*: By calculating one year's compound amount and passing it as the new principal to the next call.
25. **Q: Why is Java 21 specified?**
    - *A*: To ensure compatibility with the modern LTS Java SDK.
