from django.shortcuts import render
from .models import team_members, gallery
import base64


def render_simple_homepage(request):
    team = team_members.objects.all()
    gallery_pics = gallery.objects.all()
    return render(request, 'temp_home.html', {"team_members": team, 'gallery':gallery_pics})
#Have made the team members easy to change without need to edit the code/the html file as it no longer hard coded.
#This is a more flexible method. However, this may reduce efficieny as it needs an extra query to the database to get the team members
#I have also made the images byte64 encrypted strings. This is more efficient than fetching each image from the databse.
#Images need not be stored in the database. when a new member is added, one can simply use https://www.base64-image.de/ to byte64 encrypt the image into a string and add the string with the other details.
#the same byte64 encrypting has been done for the images in the gallery.
#However, this may lead to client side rendering of images, will fix later.

#need to make the collab now button work.
#a model for the hero text and image.
#fix the events section.
#need to make a for loop for the images instead of having it hard coded as it is now. (model?)
#could have the text be a model though that might slow down the loading.

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
