# from rest_framework import status
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework import viewsets
from rest_framework.response import Response
from .models import Magazine
from .serializer import MagazineListSerializer, MagazineDetailSerializer

# url 물음표 : request.get.get

# get all magazines
@api_view(['GET'])
def magazine_list(request):
    magazine = Magazine.objects.all()
    serializer = MagazineListSerializer(magazine, many=True)

    return Response(serializer.data)

# get the selected magazine
@api_view(['GET'])
def magazine_detail(request, pk):
    try: 
        magazine = Magazine.objects.get(pk=pk)
    except Magazine.DoesNotExist:
        return HttpResponse(status=404)  # Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method=='GET':
        serializer = MagazineDetailSerializer(magazine)
        return Response(serializer.data)


