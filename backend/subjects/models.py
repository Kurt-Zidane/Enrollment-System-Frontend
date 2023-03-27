from django.db import models

class Subject(models.Model):
     name = models.CharField(max_length=255)
     code = models.CharField(max_length=10)
# Create your models here.
