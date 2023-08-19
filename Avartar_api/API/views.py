from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Item
from .serializers import CharacterSerializer
from pymongo import MongoClient


# Connect to MongoDB Atlas
client = MongoClient('mongodb+srv://josef:tbontbtitq123@avatar-the-last-api.cgsfapg.mongodb.net/')
db = client.get_database('avatar-the-last-api')
Air_collection = db.get_collection('Air Nation Characters')


# Create your views here.
@api_view(['GET'])
def data(request):
    Air_data = Air_collection.find()
    serializer = CharacterSerializer(Air_data, many=True)
    return Response(serializer.data)    





# @api_view(['POST'])
# def get_data(request):
#     serializer = ItemSerializers(data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#     return Response(serializer.data)