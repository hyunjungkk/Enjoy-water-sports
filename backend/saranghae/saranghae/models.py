from django.db import models

# example
class Test(models.Model):
    title = models.CharField(max_length=100)
    author =models.CharField(max_length=100)
    date = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField()