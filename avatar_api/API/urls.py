from django.urls import path, include
from . import views

urlpatterns = [
    path('api/Characters/Air-Nation/', views.Air_data, name="Air_Data"),
    path('api/Characters/Fire-Nation/', views.Fire_data, name="fire_Data"),
    path('api/Characters/Water-Nation/', views.Water_data, name="Water_Data"),
    path('api/Characters/Earth-Nation/', views.Earth_data, name="Earth_Data"),
    

    path('api/Characters/Air-Nation/<int:pk>/', views.Air_data, name="Air_Data"),
    path('api/Characters/Fire-Nation/<int:pk>/', views.Fire_data, name="fire_Data"),
    path('api/Characters/Water-Nation/<int:pk>/', views.Water_data, name="Water_Data"),
    path('api/Characters/Earth-Nation/<int:pk>/', views.Earth_data, name="Earth_Data"),
    
    # URL pattern that works without 'pk' (no trailing slash)
    path('api/Characters/', views.All_characters, name="All_Data"),
    
    # URL pattern that works with 'pk' (no trailing slash)
    path('api/Characters/<int:pk>', views.All_characters, name="All_Data"),
]
