SELECT email as Email
FROM person
GROUP BY email
HAVING COUNT(email) > 1;