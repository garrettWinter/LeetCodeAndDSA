# Write your MySQL query statement below
SELECT employee_id
FROM employees
WHERE salary < 30000
AND manager_id NOT IN (select employee_ID from employees)
ORDER BY employee_id;