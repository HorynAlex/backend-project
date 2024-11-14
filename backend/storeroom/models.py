from django.db import models

# Create your models here.
class Contact(models.Model):
    name = models.CharField(max_length=50)
    title = models.CharField(max_length=100)


    def __str__(self):
        return self.title
