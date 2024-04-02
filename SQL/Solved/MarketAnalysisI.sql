# Write your MySQL query statement below
SELECT 
    users.user_id as buyer_id,
    users.join_date,
    COALESCE(SUM(orders.order_date BETWEEN '2019-01-01 'AND '2019-12-31'),0) AS orders_in_2019
FROM users
LEFT JOIN orders ON users.user_id = orders.buyer_id
GROUP BY users.user_id
ORDER BY users.user_id;