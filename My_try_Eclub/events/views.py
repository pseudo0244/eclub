from django.shortcuts import render
from django.http import HttpResponse

def render_temp_events(request):
    return HttpResponse("Events will come here.")