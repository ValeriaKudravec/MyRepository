SELECT NAME

FROM photos.user

NATURAL JOIN photos.photo_post

WHERE DATEDIFF(dd, CURTIME(), str_to_date(CREATION_DATE, '%Y-%m-%d %T')) = 0

GROUP BY USER_ID

HAVING COUNT(USER_ID) > 3