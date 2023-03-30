from django.db import models
from django.utils.timezone import now

# Create your models here.


class Student(models.Model):

    class Genders(models.TextChoices):
        MALE = 'Male',
        FEMALE = 'Female',

    first_name = models.CharField(max_length=40)
    last_name = models.CharField(max_length=40)
    age = models.IntegerField()
    date_joined = models.DateTimeField(default=now, editable=False)
    gender = models.CharField(max_length=20, choices=Genders.choices)
    address = models.CharField(max_length=250)

    form137_done = models.BooleanField()
    PSA_done = models.BooleanField()
    TwoByTwo_done = models.BooleanField()
    GoodMorale_done = models.BooleanField()

    subjects = models.ManyToManyField(
        'subjects.Subject', through='subjects.SubjectStudent')

    def __str__(self):
        return self.first_name

    @property
    def full_name(self):
        return self.first_name + " " + self.last_name
