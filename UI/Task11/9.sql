SELECT PHOTO_POST_ID, NAME, PHOTO_LINK, CREATION_DATE, DISCRIPTION, HASHTAG, LIKES

FROM photos.user

NATURAL JOIN photos.photo_post

WHERE LENGTH(DISCRIPTION) > 7