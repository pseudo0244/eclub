from django.shortcuts import render
from django.http import HttpResponse

def render_contact_us(request):
        return HttpResponse("Contact us page will come here.")