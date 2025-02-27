from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('',views.render_about_us_page,name='about'),
    
]
