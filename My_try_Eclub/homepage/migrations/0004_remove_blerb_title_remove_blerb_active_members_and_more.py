# Generated by Django 5.1 on 2025-02-15 21:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('homepage', '0003_blerb'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='blerb',
            name='Title',
        ),
        migrations.RemoveField(
            model_name='blerb',
            name='active_members',
        ),
        migrations.RemoveField(
            model_name='blerb',
            name='events_hosted',
        ),
        migrations.RemoveField(
            model_name='blerb',
            name='startups_launched',
        ),
        migrations.RemoveField(
            model_name='blerb',
            name='text',
        ),
    ]
