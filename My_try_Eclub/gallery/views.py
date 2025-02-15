from django.shortcuts import render
from django.http import HttpResponse
from homepage.models import gallery

def render_gallery(request):
    return render(request,'temp_gallery.html',{'gallery':gallery.objects.all()})

#have loaded the images as byte64 encrypted strings as it eleminates the need to store and get the images from the db/server.

#THE CSS ISNT WORKING RIGHT
#It is significantly slow though it is rendering the same images it did in homepage.
#this might be due to their size in the current css. fix
#eventually hope to get server side rendering or maybe we should go back to the old system.
