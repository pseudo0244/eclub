from django.contrib import admin

from .models import team_members, gallery, blerb

admin.site.register(team_members)
admin.site.register(gallery)
admin.site.register(blerb)
