from django.shortcuts import render
from .models import team_members, gallery, blerb

def render_simple_homepage(request):
    team = team_members.objects.all()
    gallery_pics = gallery.objects.all()
    blerb_hero = blerb.objects.all()[0]

    return render(request, 'temp_home.html', {"team_members": team, 'gallery':gallery_pics, 'blerb':blerb_hero})

#Have made the team members easy to change without need to edit the code/the html file as it no longer hard coded.
#This is a more flexible method. However, this may reduce efficieny as it needs an extra query to the database to get the team members

#I have also made the images byte64 encrypted strings. This is more efficient than fetching each image from the databse.
#Images need not be stored in the database. when a new member is added, one can simply use https://www.base64-image.de/ to byte64 encrypt the image into a string and add the string with the other details.
#the same byte64 encrypting has been done for the images in the gallery and for the cool bulb image.
#I have left the text on the blerb section hardcoded as it is unlikely to change and was increasing load time unnecesarily.

#TODO:
# I think speed can significantly be increased by rendering using static. but that isnt V friendly to admin, so try.
# #However, this may lead to client side rendering of images, will fix later.
#need to make the collab now button work.
#fix the events section.


#Heres the code I used to byte64 encrypt the images:
#import base64
#     for i in team: #similarly for gallery
#         i.image=encode_image_to_base64(i.imagepath)
#         i.save()
# def encode_image_to_base64(image_path):
#     try:
#         with open(image_path, "rb") as image_file:
#             return base64.b64encode(image_file.read()).decode("utf-8")
#     except:
#         return image_path
# #In the HTML, I loaded the images as: <img src="data:image/png;base64,{{ member.image }}" alt="{{ member.name }}" class="rounded-full mx-auto mb-4" width="200" height="200">
