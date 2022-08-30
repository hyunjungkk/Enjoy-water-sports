# from rest_framework import status
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
# from rest_framework_simplejwt.backends import TokenBackend
import jwt
from . import my_settings
from .models import Magazine, Heart, Bookmark
from .serializer import MagazineListSerializer, MagazineDetailSerializer, HeartSerializer


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
    
    serializer = MagazineDetailSerializer(magazine)
    return Response(serializer.data)


# enterprise-like
class heart_yn(APIView):
    """
    Does the user push the like-button?
    """
    def get(self, request):
        content_id = request.GET["contentid"]
        content_type_id = request.GET["contenttypeid"]
        token = request.META.get('HTTP_AUTHORIZATION', " ").split(' ')[1]
        # valid_data = TokenBackend(algorithm='HS256').decode(token,verify=True)
        # user = valid_data['user_id']
        # request.user = user
        payload = jwt.decode(token, my_settings.SIGNING_KEY, my_settings.ALGORITHM)
        user_id = payload['user_id']

        # DB
        try:
            heart = Heart.objects.get(user_id=user_id, contentid=content_id, contenttypeid=content_type_id)
        except Heart.DoesNotExist:
            return HttpResponse(status=404)
        except Heart.MultipleObjectsReturned:
            return HttpResponse(status=404)
        
        serializer = HeartSerializer(heart)
        return Response(serializer.data)

    """
    Push or cancel the like button
    """
    # def 



