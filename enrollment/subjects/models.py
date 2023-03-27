from django.db import models
from django.utils.timezone import now
# Create your models here.


class Subject(models.Model):
    subject_name = models.CharField(max_length=40)
    description = models.CharField(max_length=200)
    course_id = models.CharField(max_length=20)
    professor_assigned = models.CharField(max_length=40, null=True, default='')
    date_added = models.DateTimeField(default=now, editable=False)

    def __str__(self):
        return self.subject_name