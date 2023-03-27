from django.db import models
from subjects.models import Subject
import uuid

class Student(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    middle_initial = models.CharField(max_length=1, blank=True, null=True)
    suffix = models.CharField(max_length=10, blank=True, null=True)
    birthdate = models.DateField()
    GENDER_CHOICES = (
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other'),
    )
    Student_type = models.DateField()
    STUDENT_CHOICES = (
        ('Undergraduate', 'Undergraduate'),
        ('Graduate', 'Graduate'),
    )
    Gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    Student_type = models.CharField(max_length=13, choices=STUDENT_CHOICES)
    Form_137 = models.BooleanField(default=False)
    PSA_or_NSO = models.BooleanField(default=False)
    _2x2_picture = models.BooleanField(default=False)
    Certificate_of_Good_Morale = models.BooleanField(default=False)
    subjects = models.ManyToManyField(Subject)
    
    