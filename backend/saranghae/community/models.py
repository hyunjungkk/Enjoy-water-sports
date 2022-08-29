from django.db import models
from django.utils import timezone 
from user.models import User

class Magazine(models.Model):
    writer = models.CharField(max_length=128, null=False) # superuser
    title = models.CharField(max_length=128, null=False)
    overview = models.TextField()
    content = models.TextField()
    thumbnail = models.ImageField(upload_to="media/mz", blank=True, null=True)
    create_at = models.DateTimeField("create_at", auto_now_add=True)
    # tags = models.ManyToManyField(Tag, verbose_name='태그', blank=True)

    def __str__(self):
        return self.title

class Heart(models.Model):
    user_id = models.ForeignKey('user.User', on_delete=models.CASCADE, related_name="heart")
    contentid = models.CharField(max_length=128, null=False)
    contenttypeid = models.CharField(max_length=128, null=False)
    likeYn = models.BooleanField(default=False)

class Bookmark(models.Model):
    user_id = models.ForeignKey('user.User', on_delete=models.CASCADE, related_name="bookmark")
    mz_id = models.ForeignKey('Magazine', on_delete=models.CASCADE, related_name="bookmark")
    bookmarkYn = models.BooleanField(default=False)


# class Magazine_Comment(models.Model):
#     writer = models.CharField(max_length=128, null=False)
#     text = models.TextField()
#     magazine_id = models.ForeignKey(Magazine, on_delete=models.CASCADE, verbose_name='target') # magazine_id_id
#     created_at = models.DateTimeField('create_at', default=timezone.now)

#     def __str__(self):
#         return self.text[:20]
