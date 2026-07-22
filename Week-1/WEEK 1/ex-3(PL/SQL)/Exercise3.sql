-- Enable console output in Oracle SQL Developer
SET SERVEROUTPUT ON;

-- ==================================================================
-- SCENARIO 1: ProcessMonthlyInterest Stored Procedure
-- ==================================================================
-- Updates all Savings accounts, increasing the balance by 1%.
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
    UPDATE Accounts
    SET balance = balance * 1.01
    WHERE account_type = 'Savings';
    
    -- Commit updates upon successful completion
    COMMIT;
    DBMS_OUTPUT.PUT_LINE('ProcessMonthlyInterest: 1% monthly interest successfully applied to all Savings accounts.');
EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('ProcessMonthlyInterest Error: ' || SQLERRM);
END;
/


-- ==================================================================
-- SCENARIO 2: UpdateEmployeeBonus Stored Procedure
-- ==================================================================
-- Updates employee salaries in a specific department by a bonus percentage.
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
    p_department_id IN NUMBER,
    p_bonus_percent IN NUMBER
) IS
BEGIN
    UPDATE Employees
    SET salary = salary * (1 + (p_bonus_percent / 100))
    WHERE department_id = p_department_id;
    
    -- Commit updates upon successful completion
    COMMIT;
    DBMS_OUTPUT.PUT_LINE('UpdateEmployeeBonus: ' || p_bonus_percent || '% bonus successfully applied to employees in Department ID ' || p_department_id);
EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('UpdateEmployeeBonus Error: ' || SQLERRM);
END;
/


-- ==================================================================
-- SCENARIO 3: TransferFunds Stored Procedure
-- ==================================================================
-- Transfers funds between two accounts after verifying sufficient balance.
CREATE OR REPLACE PROCEDURE TransferFunds (
    p_from_account IN NUMBER,
    p_to_account   IN NUMBER,
    p_amount       IN NUMBER
) IS
    v_balance NUMBER;
BEGIN
    -- Query the current balance of the source account
    SELECT balance INTO v_balance
    FROM Accounts
    WHERE account_id = p_from_account;
    
    -- Verify if balance is sufficient
    IF v_balance >= p_amount THEN
        -- Deduct from source account
        UPDATE Accounts
        SET balance = balance - p_amount
        WHERE account_id = p_from_account;
        
        -- Add to destination account
        UPDATE Accounts
        SET balance = balance + p_amount
        WHERE account_id = p_to_account;
        
        -- Commit changes upon successful transfer
        COMMIT;
        DBMS_OUTPUT.PUT_LINE('Transfer Successful');
    ELSE
        -- Insufficient balance error mapping
        DBMS_OUTPUT.PUT_LINE('Insufficient Balance');
    END IF;
EXCEPTION
    -- Catch missing account IDs
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('Transfer Error: Source Account ID ' || p_from_account || ' does not exist.');
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Transfer Error: ' || SQLERRM);
END;
/


-- ==================================================================
-- SAMPLE EXECUTION COMMANDS (To test each procedure in SQL Developer)
-- ==================================================================
-- To test Scenario 1:
-- EXEC ProcessMonthlyInterest;

-- To test Scenario 2 (Applying 5% bonus to Department ID 10):
-- EXEC UpdateEmployeeBonus(10, 5);

-- To test Scenario 3 (Transferring 500 from Account 1001 to 1002):
-- EXEC TransferFunds(1001, 1002, 500);
