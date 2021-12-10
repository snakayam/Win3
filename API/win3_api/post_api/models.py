from django.db import models

# Create your models here.
class Contents(models.Model):
    title = models.CharField(max_length=20)
    thum_img = models.ImageField()
    contents = models.TextField()
    made_by = models.ForeignKey(settings.User,)
    date = models.DateTimeField(auto_now_add=True)
    last_change = models.DateTimeField(auto_now=True)
    published = models.BooleanField()

