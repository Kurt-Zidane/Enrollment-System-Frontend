# Generated by Django 4.1.7 on 2023-03-28 13:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('subjects', '0006_alter_subject_students'),
    ]

    operations = [
        migrations.AddField(
            model_name='subjectprofessor',
            name='date_updated',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AddField(
            model_name='subjectstudent',
            name='date_updated',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
