from django.shortcuts import render
from django.http import HttpResponse

def render_about_us_page(request):
        return HttpResponse("About us page will come here.")