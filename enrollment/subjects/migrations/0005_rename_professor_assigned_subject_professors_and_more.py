# Generated by Django 4.1.7 on 2023-03-28 13:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('subjects', '0004_subject_students_assigned'),
    ]

    operations = [
        migrations.RenameField(
            model_name='subject',
            old_name='professor_assigned',
            new_name='professors',
        ),
        migrations.RenameField(
            model_name='subject',
            old_name='students_assigned',
            new_name='students',
        ),
    ]
