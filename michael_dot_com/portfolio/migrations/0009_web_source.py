# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2016-03-20 17:28
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0008_auto_20160319_1605'),
    ]

    operations = [
        migrations.AddField(
            model_name='web',
            name='source',
            field=models.URLField(blank=True),
        ),
    ]
