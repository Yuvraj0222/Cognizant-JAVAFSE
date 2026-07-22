-- Enable console output in Oracle SQL Developer
SET SERVEROUTPUT ON;

-- Start of PL/SQL Anonymous Block
BEGIN

    -- ==================================================================
    -- SCENARIO 1: Apply interest rate discounts for senior citizens (age > 60)
    -- ==================================================================
    -- Loop through customers older than 60 who have active loans.
    -- Reduce their interest rate by 1% (subtract 1 from interest_rate).
    FOR r1 IN (
        SELECT c.customer_id, c.name, c.age, l.loan_id, l.interest_rate
        FROM Customers c
        JOIN Loans l ON c.customer_id = l.customer_id
        WHERE c.age > 60
    ) LOOP
        -- Apply the discount by updating the interest rate in the Loans table
        UPDATE Loans
        SET interest_rate = interest_rate - 1
        WHERE loan_id = r1.loan_id;

        -- Display success message showing the customer ID and that the discount was applied
        DBMS_OUTPUT.PUT_LINE('Scenario 1: Customer ID ' || r1.customer_id || ' - 1% interest rate discount applied to Loan ID ' || r1.loan_id);
    END LOOP;


    -- ==================================================================
    -- SCENARIO 2: Promote high-balance customers to VIP status (balance > 10000)
    -- ==================================================================
    -- Loop through customers with a balance greater than 10000.
    -- Set isVIP to 'TRUE' (using VARCHAR2 representation).
    FOR r2 IN (
        SELECT customer_id, name, balance
        FROM Customers
        WHERE balance > 10000 AND (isVIP IS NULL OR isVIP <> 'TRUE')
    ) LOOP
        -- Update isVIP column to 'TRUE' in the Customers table
        UPDATE Customers
        SET isVIP = 'TRUE'
        WHERE customer_id = r2.customer_id;

        -- Display message showing the customer ID promoted to VIP
        DBMS_OUTPUT.PUT_LINE('Scenario 2: Customer ID ' || r2.customer_id || ' promoted to VIP.');
    END LOOP;


    -- ==================================================================
    -- SCENARIO 3: Send reminders for loans due within the next 30 days
    -- ==================================================================
    -- Loop through all loans due between today and the next 30 days.
    -- SYSDATE represents current date. SYSDATE + 30 represents 30 days from now.
    FOR r3 IN (
        SELECT loan_id, customer_id, due_date
        FROM Loans
        WHERE due_date >= SYSDATE AND due_date <= SYSDATE + 30
    ) LOOP
        -- Print reminder message including customer ID, loan ID, and due date
        DBMS_OUTPUT.PUT_LINE('Scenario 3 Reminder: Customer ID ' || r3.customer_id || ' - Loan ID ' || r3.loan_id || ' is due on ' || TO_CHAR(r3.due_date, 'YYYY-MM-DD'));
    END LOOP;

    -- Commit transaction changes to persist updates
    COMMIT;

EXCEPTION
    -- Catch all exceptions to prevent block failure
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('An unexpected error occurred: ' || SQLERRM);
END;
/
