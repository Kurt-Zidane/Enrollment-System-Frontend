# Generated by Django 4.1.7 on 2023-03-28 13:25

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=40)),
                ('last_name', models.CharField(max_length=40)),
                ('age', models.IntegerField()),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, editable=False)),
                ('gender', models.CharField(choices=[('Male', 'Male'), ('Female', 'Female')], max_length=20)),
                ('address', models.CharField(max_length=250)),
                ('Form 137 Submitted', models.BooleanField()),
                ('PSA/NSO Submitted', models.BooleanField()),
                ('2x2 Photo Submitted', models.BooleanField()),
                ('Certificate of Good Moral Submitted', models.BooleanField()),
            ],
        ),
    ]
