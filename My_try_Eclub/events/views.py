from django.shortcuts import render
from django.http import HttpResponse

def render_temp_events(request):
    return HttpResponse("Events will come here.")

#get the notify buttonw working.
#load blogs like we did events in dajango_try and get the timer working for each.
# each event should be a get send to a pk page. (simple like in dajango) 
#get the social media links working