from django.db import models
from django.utils.timezone import now
# Create your models here.


class Professor(models.Model):

    class Genders(models.TextChoices):
        MALE = 'Male',
        FEMALE = 'Female',
    
    first_name = models.CharField(max_length=40)
    last_name = models.CharField(max_length=40)
    age = models.IntegerField()
    date_joined = models.DateTimeField(default=now, editable=False)
    gender = models.CharField(max_length=20, choices=Genders.choices)

    def __str__(self):
        return self.first_name