# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2017-06-10 07:36
from __future__ import unicode_literals

import django.contrib.gis.db.models.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('jobs', '0048_auto_20170610_0634'),
    ]

    operations = [
        migrations.AlterField(
            model_name='job',
            name='the_geom',
            field=django.contrib.gis.db.models.fields.GeometryField(srid=4326, verbose_name='Extent for export'),
        ),
    ]
