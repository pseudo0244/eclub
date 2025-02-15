from django.shortcuts import render
from django.http import HttpResponse

def render_gallery(request):
    return HttpResponse('gallery will come here')

#have the gallery load using a loop and preferably from byte64 encrypt, but careful, might slow the website further.
