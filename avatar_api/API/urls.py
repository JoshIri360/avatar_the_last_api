from django.urls import path , include
from . import views

urlpatterns = [
    path('Characters/Air-Nation/', views.Air_data, name="Air_Data"),
    path('Characters/Fire-Nation/', views.Fire_data, name="fire_Data"),
    path('Characters/Water-Nation/', views.Water_data, name="Water_Data"),
    path('Characters/Earth-Nation/', views.Earth_data, name="Earth_Data"),
    path('Characters/', views.All_characters, name="All_Data"),
]

