from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('',views.render_contact_us,name='contact'),
    
]
