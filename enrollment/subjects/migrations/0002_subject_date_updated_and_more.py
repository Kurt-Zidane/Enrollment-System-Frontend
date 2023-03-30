# Generated by Django 4.1.7 on 2023-03-28 12:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('professor', '0001_initial'),
        ('subjects', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='subject',
            name='date_updated',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.RemoveField(
            model_name='subject',
            name='professor_assigned',
        ),
        migrations.CreateModel(
            name='SubjectProfessor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('professor_assigned', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='professor.professor')),
                ('subject', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='subjects.subject')),
            ],
        ),
        migrations.AddField(
            model_name='subject',
            name='professor_assigned',
            field=models.ManyToManyField(through='subjects.SubjectProfessor', to='professor.professor'),
        ),
    ]
