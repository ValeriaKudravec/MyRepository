SELECT NAME, CREATION_DATE, DESCRIPTION

FROM photos.user

NATURAL JOIN photos.photo_post

ORDER BY CREATION_DATE