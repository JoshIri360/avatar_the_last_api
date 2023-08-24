from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import CharacterSerializer
from pymongo import MongoClient


# Connect to MongoDB Atlas
client = MongoClient('mongodb+srv://josef:tbontbtitq123@avatar-the-last-api.cgsfapg.mongodb.net/')
db = client.get_database('avatar-the-last-api')



# Create your views here.

@api_view(['GET'])
def All_characters(request):

     # Get the query parameters from the request
    name = request.GET.get('name', 'default_value')
    nationality = request.GET.get('nationality', 'default_value')
    gender = request.GET.get('gender', 'default_value')


    # Create a dictionary with the parameters you want to query
    query = {}

     # Check if 'name' parameter is provided, and add it to the query
    if name != 'default_value':
        query['name'] = name.capitalize()


    # Check if 'gender' parameter is provided, and add it to the query
    if gender != 'default_value':
        query['Gender'] = gender


    Air_collection = db.get_collection('Air Nation Characters')
    Fire_collection = db.get_collection('Fire Nation Characters')
    Water_collection = db.get_collection('Water Nation Characters')
    Earth_collection = db.get_collection('Earth Nation Characters')
   
    Air_characters = Air_collection.find(query)
    Fire_characters = Fire_collection.find(query)
    Water_characters = Water_collection.find(query)
    Earth_characters = Earth_collection.find()
    
    Air_serializer = CharacterSerializer(Air_characters, many=True)
    Fire_serializer = CharacterSerializer(Fire_characters, many=True)
    Water_serializer = CharacterSerializer(Water_characters, many=True)
    Earth_serializer = CharacterSerializer(Earth_characters, many=True)

    All_data={'Air Nation': Air_serializer.data,
              'Fire Nation': Fire_serializer.data,
              'Water Nation': Water_serializer.data,
              'Earth Nation': Earth_serializer.data}
    return Response(All_data)    



@api_view(['GET'])
def Air_data(request):

    Air_collection = db.get_collection('Air Nation Characters')
     # Get the query parameters from the request
    name = request.GET.get('name', 'default_value')
    nationality = request.GET.get('nationality', 'default_value')
    gender = request.GET.get('gender', 'default_value')


    # Create a dictionary with the parameters you want to query
    query = {}

     # Check if 'name' parameter is provided, and add it to the query
    if name != 'default_value':
        query['name'] = name.capitalize()


    # Check if 'gender' parameter is provided, and add it to the query
    if gender != 'default_value':
        query['Gender'] = gender

    
    data = Air_collection.find(query)
    serializer = CharacterSerializer(data, many=True)
    return Response(serializer.data)    



@api_view(['GET'])
def Fire_data(request):

    Fire_collection = db.get_collection('Fire Nation Characters')
     # Get the query parameters from the request
    name = request.GET.get('name', 'default_value')
    nationality = request.GET.get('nationality', 'default_value')
    gender = request.GET.get('gender', 'default_value')


    # Create a dictionary with the parameters you want to query
    query = {}

     # Check if 'name' parameter is provided, and add it to the query
    if name != 'default_value':
        query['name'] = name.capitalize()


    # Check if 'gender' parameter is provided, and add it to the query
    if gender != 'default_value':
        query['Gender'] = gender

  
    data = Fire_collection.find(query)
    serializer = CharacterSerializer(data, many=True)
    return Response(serializer.data)    

@api_view(['GET'])
def Water_data(request):

    Water_collection = db.get_collection('Water Nation Characters')
     # Get the query parameters from the request
    name = request.GET.get('name', 'default_value')
    nationality = request.GET.get('nationality', 'default_value')
    gender = request.GET.get('gender', 'default_value')


    # Create a dictionary with the parameters you want to query
    query = {}

     # Check if 'name' parameter is provided, and add it to the query
    if name != 'default_value':
        query['name'] = name.capitalize()


    # Check if 'gender' parameter is provided, and add it to the query
    if gender != 'default_value':
        query['Gender'] = gender

  
    data = Water_collection.find(query)
    serializer = CharacterSerializer(data, many=True)
    return Response(serializer.data)    

@api_view(['GET'])
def Earth_data(request):

    Earth_collection = db.get_collection('Earth Nation Characters')
     # Get the query parameters from the request
    name = request.GET.get('name', 'default_value')
    nationality = request.GET.get('nationality', 'default_value')
    gender = request.GET.get('gender', 'default_value')


    # Create a dictionary with the parameters you want to query
    query = {}

     # Check if 'name' parameter is provided, and add it to the query
    if name != 'default_value':
        query['name'] = name.capitalize()


    # Check if 'gender' parameter is provided, and add it to the query
    if gender != 'default_value':
        query['Gender'] = gender

  
    data = Earth_collection.find(query)
    serializer = CharacterSerializer(data, many=True)
    return Response(serializer.data)    

    
