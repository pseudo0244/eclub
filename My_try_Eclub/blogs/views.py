from django.shortcuts import render
from django.http import HttpResponse

def render_temp_blogs(request):
    return HttpResponse("Blogs will come here.")