# Write your MySQL query statement below
SELECT 
    *,
    IF(order_date = customer_pref_delivery_date, "immediate", "scheduled") as "delivery_type",
    MIN(order_date)
        CASE
        WHEN MIN(order_date) = MIN(customer_pref_delivery_date) THEN 'immediate'
        ELSE "scheduled"
FROM delivery;



