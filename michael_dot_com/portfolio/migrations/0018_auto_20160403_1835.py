# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2016-04-03 18:35
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0017_auto_20160402_1809'),
    ]

    operations = [
        migrations.CreateModel(
            name='GraphicImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.FileField(blank=True, null=True, upload_to='graphic')),
            ],
        ),
        migrations.AlterField(
            model_name='graphic',
            name='image',
            field=models.FileField(blank=True, null=True, upload_to='graphic'),
        ),
        migrations.AddField(
            model_name='graphicimage',
            name='graphic',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='portfolio.Graphic'),
        ),
    ]
