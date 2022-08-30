# from rest_framework import status
from pickle import FALSE
import jwt
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
# from rest_framework_simplejwt.backends import TokenBackend
from . import my_settings
from user.models import User
from .models import Magazine, Heart, Bookmark
from .serializer import MagazineListSerializer, MagazineDetailSerializer, HeartSerializer, BookmarkSerializer
from rest_framework.pagination import PageNumberPagination
from .pagination import PaginationHandlerMixin

class MemoPagination(PageNumberPagination):
    page_size_query_param = 'limit'

# Magazine list
class magazine_list(APIView, PaginationHandlerMixin):
    pagination_class = MemoPagination
    serializer_class = MagazineListSerializer
    
    def get(self, request):  
        try:
            magazine = Magazine.objects.all()
        except Magazine.DoesNotExist:
                return HttpResponse(status=404)
        except Magazine.MultipleObjectsReturned:
                return HttpResponse(status=404)

        # paginate
        page = self.paginate_queryset(magazine)
        if page is not None:
            serializer = self.get_paginated_response(self.serializer_class(page, many=True).data)
        else:
            serializer = self.serializer_class(page, many=True)
        
        return Response(serializer.data)

        # magazine = Magazine.objects.all()
        # serializer = MagazineListSerializer(magazine, many=True)
        # return Response(serializer.data)


    

# Magazine detail
@api_view(['GET'])
def magazine_detail(request, pk):
    try: 
        magazine = Magazine.objects.get(pk=pk)
    except Magazine.DoesNotExist:
        return HttpResponse(status=404)  # Response(status=status.HTTP_404_NOT_FOUND)
    
    serializer = MagazineDetailSerializer(magazine)
    return Response(serializer.data)



# Enterprise-like
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
            return Response({"likeYn":False,})
        
        serializer = HeartSerializer(heart)
        return Response(serializer.data)

    """
    Push or cancel the like button
    """
    def post(self, request):
        content_id = request.GET["contentid"]
        content_type_id = request.GET["contenttypeid"]
        token = request.META.get('HTTP_AUTHORIZATION', " ").split(' ')[1]
        payload = jwt.decode(token, my_settings.SIGNING_KEY, my_settings.ALGORITHM)
        user_id = payload['user_id']

        try:
        # cancel
            Heart.objects.get(user_id=user_id, contentid=content_id, contenttypeid=content_type_id).delete()
            res = Response({
                   "message" : "success(cancel)",
                    "likeYn" : False,
                },
                status = status.HTTP_200_OK
            )
            return res
        
        except Heart.DoesNotExist:
        # push the like button
            user = User.objects.get(id=user_id)
            Heart.objects.create(
                user_id = user,
                contentid = content_id,
                contenttypeid = content_type_id,
                likeYn = True,
            )
            res = Response({
                   "message" : "success(like)",
                    "likeYn" : True,
                },
                status = status.HTTP_200_OK
            )
            return res
        # obj, created = Heart.objects.get_or_create(user_id=user_id, contentid=content_id, contenttypeid=content_type_id)       
        # if not created:

# Enterprise-like list
class heart_list(APIView, PaginationHandlerMixin):
    pagination_class = MemoPagination
    serializer_class = HeartSerializer

    """
    get user's like lists 
    """
    def get(self, request):
        token = request.META.get('HTTP_AUTHORIZATION', " ").split(' ')[1]
        payload = jwt.decode(token, my_settings.SIGNING_KEY, my_settings.ALGORITHM)
        user_id = payload['user_id']

        # DB
        try:
            heart = Heart.objects.all()
            heart = heart.filter(user_id=user_id)
            print(heart.filter(user_id=user_id))
            #heart = Heart.objects.all()
        except Heart.DoesNotExist:
            return HttpResponse(status=404)
        except Heart.MultipleObjectsReturned:
            return HttpResponse(status=404)

        # paginate
        page = self.paginate_queryset(heart)
        if page is not None:
            serializer = self.get_paginated_response(self.serializer_class(page, many=True).data)
        else:
            serializer = self.serializer_class(page, many=True)
        
       # serializer = HeartSerializer(heart, many=True)
        return Response(serializer.data)



# Magazine - Bookmark
class bookmark_yn(APIView):
    def get(self, request):
        mz_id = request.GET["mz_id"]
        token = request.META.get('HTTP_AUTHORIZATION', " ").split(' ')[1]
        payload = jwt.decode(token, my_settings.SIGNING_KEY, my_settings.ALGORITHM)
        user_id = payload['user_id']

        # DB
        try:
            bookmark = Bookmark.objects.get(user_id=user_id, mz_id=mz_id)
        except Bookmark.DoesNotExist:
            return Response({"bookmarkYn":False,})
        
        serializer = BookmarkSerializer(bookmark)
        return Response(serializer.data)


    def post(self, request):
        mz_id = request.GET["mz_id"]
        token = request.META.get('HTTP_AUTHORIZATION', " ").split(' ')[1]
        payload = jwt.decode(token, my_settings.SIGNING_KEY, my_settings.ALGORITHM)
        user_id = payload['user_id']

        try:
        # cancel
            Bookmark.objects.get(user_id=user_id, mz_id=mz_id).delete()
            res = Response({
                   "message" : "success(cancel)",
                    "bookmarkYn" : False,
                },
                status = status.HTTP_200_OK
            )
            return res
        
        except Bookmark.DoesNotExist:
        # push the bookmark button
            user = User.objects.get(id=user_id)
            mz = Magazine.objects.get(id=mz_id)
            Bookmark.objects.create(
                user_id = user,
                mz_id = mz,
                bookmarkYn = True,
            )
            res = Response({
                   "message" : "success(bookmark)",
                    "bookmarkYn" : True,
                },
                status = status.HTTP_200_OK
            )
            return res

# Magazine - Bookmark list
class bookmark_list(APIView, PaginationHandlerMixin):
    pagination_class = MemoPagination
    serializer_class = BookmarkSerializer

    def get(self, request):
        token = request.META.get('HTTP_AUTHORIZATION', " ").split(' ')[1]
        payload = jwt.decode(token, my_settings.SIGNING_KEY, my_settings.ALGORITHM)
        user_id = payload['user_id']

        # DB
        try:
            bookmark = Bookmark.objects.all()
            bookmark = bookmark.filter(user_id=user_id)
        except Bookmark.DoesNotExist:
            return HttpResponse(status=404)
        except Bookmark.MultipleObjectsReturned:
            return HttpResponse(status=404)

        # paginate
        page = self.paginate_queryset(bookmark)
        if page is not None:
            serializer = self.get_paginated_response(self.serializer_class(page, many=True).data)
        else:
            serializer = self.serializer_class(page, many=True)
        
       # serializer = HeartSerializer(heart, many=True)
        return Response(serializer.data)