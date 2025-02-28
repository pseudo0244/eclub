from django.shortcuts import render
from django.http import HttpResponse

def render_about_us_page(request):
        return render(request,"temp_about.html")

#byte64 image makes slower?
#should we make model for text of mission etc?
#Our jourey should be a model that can be added to and the thing should be a loop in the html.
#Same for events hosted by us.
#contact us button to be linked.
