from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    user = models.OneToOneField(User, null=True, on_delete=models.CASCADE)
    image = models.ImageField(default='default.jpg', upload_to='profile_pics')
    first_name = models.CharField(max_length=200, null=True)
    last_name = models.CharField(max_length=200, null=True)
    mi = models.CharField(max_length=5, null=True)
    suffix = models.CharField(max_length=10, null=True)
    address = models.CharField(max_length=200, null=True)

    GENDER_CHOICES = (
        ('Male', 'Male'),
        ('Female', 'Female'),
        ('Other', 'Other'),
    )
    gender = models.CharField(max_length=6, null='Choose', choices=GENDER_CHOICES)

    def __str__(self):
        return f'{self.user.username} Profile'