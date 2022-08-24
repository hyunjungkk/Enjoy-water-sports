from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .api import enterprise_tour_api

# get example
@api_view(['GET'])
def enterprise(request):
    str_contentid = request.GET.get("contentid",None)
    str_contenttypeid = request.GET.get("contenttypeid",None)

    res = enterprise_tour_api(str_contentid, str_contenttypeid)
    overview = res
    context = {'overview': overview} 
    return Response(res)