from django.shortcuts import render

def index(request):
    return render(request,'index.html')


def invalid_endpoint(request):
    return render(request, 'invalid_endpoint.html')
