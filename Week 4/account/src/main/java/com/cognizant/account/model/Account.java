package com.cognizant.account.model;

/**
 * Plain Old Java Object (POJO) representing an Account.
 */
public class Account {

    private String number;
    private String type;
    private double balance;

    // No-argument constructor (required for JSON deserialization)
    public Account() {
    }

    // All-argument constructor
    public Account(String number, String type, double balance) {
        this.number = number;
        this.type = type;
        this.balance = balance;
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

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    // Override toString() for debugging/logging
    @Override
    public String toString() {
        return "Account{" +
                "number='" + number + '\'' +
                ", type='" + type + '\'' +
                ", balance=" + balance +
                '}';
    }
}
