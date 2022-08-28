from django.db import models
from django.utils import timezone 

class Magazine(models.Model):
    # author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="boards????")
    writer = models.CharField(max_length=128, null=False)
    title = models.CharField(max_length=128, null=False)
    overview = models.TextField()
    content = models.TextField()
    # thumbnail = models.ImageField(blank=True, upload_to="images", null=True)
    create_at = models.DateTimeField("create_at", auto_now_add=True)
    # tags = models.ManyToManyField(Tag, verbose_name='태그', blank=True)

    def __str__(self):
        return self.title


# class Magazine_Comment(models.Model):
#     writer = models.CharField(max_length=128, null=False)
#     text = models.TextField()
#     magazine_id = models.ForeignKey(Magazine, on_delete=models.CASCADE, verbose_name='target') # magazine_id_id
#     created_at = models.DateTimeField('create_at', default=timezone.now)

#     def __str__(self):
#         return self.text[:20]
