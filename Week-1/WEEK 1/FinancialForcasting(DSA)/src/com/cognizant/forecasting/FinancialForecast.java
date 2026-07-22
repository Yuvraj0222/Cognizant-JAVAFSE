package com.cognizant.forecasting;

/**
 * Class containing the recursive forecasting logic for investments.
 */
public class FinancialForecast {

    /**
     * Recursively predicts the future value of an investment.
     * Formula:
     * - Base Case: If years is 0, return current principal value.
     * - Recursive Case: Return predictFutureValue(principal * (1 + growthRate), growthRate, years - 1).
     *
     * @param principal  The current or initial sum of money.
     * @param growthRate The growth rate per period (e.g. 0.10 for 10%).
     * @param years      The number of years (periods) remaining.
     * @return The predicted future value of the investment.
     */
    public double predictFutureValue(double principal, double growthRate, int years) {
        // Base Case: No more years remaining, return the accumulated principal
        if (years == 0) {
            return principal;
        }

        // Recursive Case: Accumulate compound growth for 1 year, and recurse for remaining years
        double accumulatedPrincipal = principal * (1 + growthRate);
        return predictFutureValue(accumulatedPrincipal, growthRate, years - 1);
    }
}
