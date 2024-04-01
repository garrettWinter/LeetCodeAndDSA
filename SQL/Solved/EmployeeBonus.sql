# Write your MySQL query statement below
SELECT e.name, b.bonus
FROM employee e
LEFT JOIN bonus b ON e.empId = b.empID
WHERE b.bonus IS NULL OR b.bonus < 1000;