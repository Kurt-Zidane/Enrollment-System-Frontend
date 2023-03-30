from django.db import models
from django.contrib.auth.models import User
from django.utils.timezone import now
from django.contrib.auth import get_user_model
User = get_user_model()

class Profile(models.Model):
    owner = models.ForeignKey(User, null=True, on_delete=models.CASCADE)
    image = models.ImageField(default='default.jpg', upload_to='profile_pics')
    first_name = models.CharField(max_length=200, null=True)
    last_name = models.CharField(max_length=200, null=True)
    mi = models.CharField(max_length=5, null=True)
    suffix = models.CharField(max_length=10, null=True)
    birthdate = models.DateField(null=True, blank=True)
    address = models.CharField(max_length=200, null=True)
    date_joined = models.DateTimeField(default=now, editable=False)


    GENDER_CHOICES = (
        ('Male', 'Male'),
        ('Female', 'Female'),
        ('Other', 'Other'),
    )
    gender = models.CharField(max_length=6, null='Choose', choices=GENDER_CHOICES)

    def __str__(self):
        return self.first_name