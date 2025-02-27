from django.db import models as m

class team_members(m.Model):
    name = m.CharField(max_length=100)
    position = m.CharField(max_length=100)
    image = m.CharField(max_length=100000000) #is a byte64 encrypted string

    def __str__(self):
        return f"{self.name}-{self.position}"

class gallery(m.Model):
    image = m.CharField(max_length=100000000) #is a byte64 encrypted string

class blerb(m.Model): #must have only one instance. Just so that the image can be byte64 encrypted. instead of stored on the server.
    image = m.CharField(max_length=100000000) #is a byte64 encrypted string