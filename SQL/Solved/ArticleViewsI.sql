SELECT DISTINCT author_ID as id
FROM views
WHERE author_id  = viewer_id
order by author_id ;