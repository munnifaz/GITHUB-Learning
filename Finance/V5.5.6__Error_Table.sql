-- Create a table named "products" with columns for product_id, name, category, and price
CREATE OR REPLACE TABLE OPERATION.PUBLIC.products (
    product_id INT,  -- Syntax error: missing comma after 'INT'
    name VARCHAR(255),
    category VARCHAR(255),
    price DECIMAL(10, 2)
);

-- Insert data into the "products" table with a syntax error
INSERT INTO OPERATION.PUBLIC.products (product_id, name, category, price) VALUES
    (1, 'Laptop', 'Electronics', 1200.00),
    (2, 'Mouse', 'Electronics', 25.00),
    (3, 'Keyboard', 'Electronics', 50.00);  -- Syntax error: missing comma after 'Electronics'