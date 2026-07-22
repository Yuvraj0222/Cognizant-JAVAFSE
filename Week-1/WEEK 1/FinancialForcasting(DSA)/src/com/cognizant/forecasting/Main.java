package com.cognizant.forecasting;

/**
 * Runner class to execute the investment forecasting program.
 */
public class Main {

    public static void main(String[] args) {
        // Initialize investment parameters
        double principal = 100000.0;
        double growthRate = 0.10; // 10% growth rate
        int years = 5;

        // Instantiate forecast calculator
        FinancialForecast forecast = new FinancialForecast();

        // Calculate future value recursively
        double futureValue = forecast.predictFutureValue(principal, growthRate, years);

        // Display results matching the expected format
        System.out.println("Initial Investment : " + (int) principal);
        System.out.println("Growth Rate : " + (int) (growthRate * 100) + "%");
        System.out.println("Years : " + years);
        System.out.println("Forecasted Future Value : " + (Math.round(futureValue * 10) / 10.0));
    }
}
