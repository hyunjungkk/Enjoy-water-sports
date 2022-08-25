from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .api import enterprise_tour_api
from .api import areacode_tour_api
from .api import rank_tour_api
from .api import locationlist_tour_api

# """"""""""
# rank
# enterprise 정보 상세 조회
# """"""""""
@api_view(['GET'])
def enterprise(request):
    str_contentid = request.GET.get("contentid",'')
    str_contenttypeid = request.GET.get("contenttypeid",'')

    res = enterprise_tour_api(str_contentid, str_contenttypeid)
    return Response(res)

# """"""""""
# rank
# 지역 코드 조회 -> 결과 값 그대로 리턴
# """"""""""
@api_view(['GET'])
def areacode(request):
    str_areacode = request.GET.get("areacode",'')

    res = areacode_tour_api(str_areacode)
    return Response(res)

# """"""""""
# rank
# 키워드 검색 조회 -> 랭킹 3순위까지 리턴
# """"""""""
@api_view(['GET'])
def rank(request):
    str_keyword = request.GET.get("rank",'')

    res = rank_tour_api(str_keyword)
    return Response(res)

# """"""""""
# locationlist
# 레저 종류/지역에 따라 검색한 결과 제공
# """"""""""
@api_view(['GET'])
def locationlist(request):
    str_areacode = request.GET.get("areacode",'')
    str_sigungucode = request.GET.get("sigungucode",'')
    str_cat1 = request.GET.get("cat1",'')
    str_cat2 = request.GET.get("cat2",'')
    str_cat3 = request.GET.get("cat3",'')

    str_page = request.GET.get("pageid",'')

    res = locationlist_tour_api(str_areacode,str_sigungucode,
                                str_cat1,str_cat2,str_cat3,str_page)
    return Response(res)

    