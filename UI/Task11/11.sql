SELECT DATEDIFF(dd, CURTIME(), str_to_date(CREATION_DATE, '%Y-%m-%d%T'))

FROM photos.photo_post

ORDER BY CREATION_DATE

LIMIT 1