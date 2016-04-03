# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2016-04-02 17:42
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0015_graphic'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='graphic',
            options={'ordering': ['-year']},
        ),
        migrations.AddField(
            model_name='graphic',
            name='slug',
            field=models.SlugField(default='pump-train', max_length=200, unique=True),
            preserve_default=False,
        ),
    ]
