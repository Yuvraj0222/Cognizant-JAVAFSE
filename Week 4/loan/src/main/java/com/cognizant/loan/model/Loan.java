package com.cognizant.loan.model;

/**
 * Plain Old Java Object (POJO) representing a Loan.
 */
public class Loan {

    private String number;
    private String type;
    private double loan;
    private double emi;
    private int tenure;

    // No-argument constructor (required for JSON deserialization)
    public Loan() {
    }

    // All-argument constructor
    public Loan(String number, String type, double loan, double emi, int tenure) {
        this.number = number;
        this.type = type;
        this.loan = loan;
        this.emi = emi;
        this.tenure = tenure;
    }

    // Getters and Setters
    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public double getLoan() {
        return loan;
    }

    public void setLoan(double loan) {
        this.loan = loan;
    }

    public double getEmi() {
        return emi;
    }

    public void setEmi(double emi) {
        this.emi = emi;
    }

    public int getTenure() {
        return tenure;
    }

    public void setTenure(int tenure) {
        this.tenure = tenure;
    }

    // Override toString() for debugging/logging
    @Override
    public String toString() {
        return "Loan{" +
                "number='" + number + '\'' +
                ", type='" + type + '\'' +
                ", loan=" + loan +
                ", emi=" + emi +
                ", tenure=" + tenure +
                '}';
    }
}
