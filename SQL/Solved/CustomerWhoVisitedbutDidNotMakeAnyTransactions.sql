# Write your MySQL query statement below
SELECT customer_id, COUNT(customer_id) AS count_no_trans FROM visits WHERE visit_ID NOT IN ( SELECT visit_ID FROM transactions ) GROUP BY customer_id;