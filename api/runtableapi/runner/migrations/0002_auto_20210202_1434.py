# Generated by Django 3.1.4 on 2021-02-02 14:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('runner', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='runner',
            old_name='id',
            new_name='runner_id',
        ),
        migrations.RenameField(
            model_name='running',
            old_name='id',
            new_name='running_id',
        ),
    ]
