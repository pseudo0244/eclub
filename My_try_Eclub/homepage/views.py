from django.shortcuts import render

def render_simple_homepage(request):
    team_members = [
        {"name": "Kaashvi R", "position": "President", "image": "Team/Kaashvi.png"},
        {"name": "Neha Nair", "position": "Vice President", "image": "Team/Neha Nair_VP.jpg"},
        {"name": "Devansh V", "position": "Head of Events", "image": "Team/Devansh_Events.jpg"},
        {"name": "Shrikrishna Pandit", "position": "Head of Events", "image": "Team/Shrikrishna.jpg"},
        {"name": "Prathamesh Devadiga", "position": "Head of Technology", "image": "Team/Prathamesh.jpg"},
        {"name": "Kamya Jha", "position": "Head of SMM", "image": "Team/Kamya.jpg"},
        {"name": "Shreya S", "position": "Head of Corporate Relations", "image": "Team/Shreya S CR.jpg"},
        {"name": "Saabith Salem", "position": "Head of Corporate Relations", "image": "Team/SaabithSaleem_CR.jpg"},
        {"name": "Amogh K", "position": "Head of Operations", "image": "Team/amogh_ops_head.jpg"},
        {"name": "Parikshil Sharma", "position": "Head of Operations", "image": "Team/Parikshilsharma.jpg"},
    ]
    return render(request, 'temp_home.html', {"team_members": team_members})
