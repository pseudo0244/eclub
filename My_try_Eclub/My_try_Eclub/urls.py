"""
URL configuration for My_try_Eclub project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

urlpatterns = [ 
    #The reason i am making seperate apps for each major functionality/link is to allow for easier future scalability while keeping it clean and understood what is where.
    #they could also just be done in one file, but since I see this club growing much further in its tech domain, in case it has a more dynamic website in its future, it would be easy to work on just one app instead of wading through one long file.
    path('admin/', admin.site.urls),
    path('',include('homepage.urls')),
    path('about/',include('about.urls')),
    path('events/',include('events.urls')),
    path('gallery/',include('gallery.urls')),
    path('blogs/',include('blogs.urls')),
    path('contact/',include('contact.urls')),
]

#top standard has a currently non clickable E club button, clickable home, about, events, gallery, blog buttons, non clickable contact us button.
#we have homepage, #contains collab now and event buttons (not working), static info and pics from the gallery (must be updatable easily), meet our team pics and names (same), 
# /about page #contains pic (currently blurry) and content (changable rarely?) contains bottom get in touch section with a contact us button (currently not working)
# /events page #contains currently not ready static text and not working notify section and social buttons/links.
# /gallery page #contains pics that load V quick and are fairly clear. (and some text)
# /blogs page #contains currently not ready static text and not working notify section and social buttons/links.
# must make a contact us page.
# must make a discreet login page for ppl to post blogs.
#admin must be able to control the website fully without having to go into the code/server
#admin must be able to add users (for blogposts) and view their points
#other examples: in the about us page and homepage, admin must be able to easily change the team_members. you could make models for members in the backend and have it render in a loop maybe.
