# Write your MySQL query statement below
SELECT customer_id
FROM customer
JOIN product ON customer.product_key = product.product_key
GROUP BY customer.customer_id
HAVING COUNT(DISTINCT product.product_key) = (SELECT COUNT(*) FROM product);