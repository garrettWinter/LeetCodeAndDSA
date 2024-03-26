SELECT
    s.product_id,
    s.year as first_year,
    s.quantity,
    s.price
FROM sales as s
INNER JOIN (
    SELECT
        product_id,
        MIN(year) as first_year
    FROM
        sales
    GROUP BY
        product_id
) first_sale ON s.product_id = first_sale.product_id AND s.year = first_sale.first_year;