# Generated by Django 2.2.12 on 2020-05-25 06:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_user_hghg'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='hghg',
        ),
    ]
