# Generated by Django 3.1.4 on 2021-02-10 14:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('runner', '0003_auto_20210210_1406'),
    ]

    operations = [
        migrations.AlterField(
            model_name='running',
            name='distant',
            field=models.DecimalField(decimal_places=3, max_digits=4),
        ),
    ]
