from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .api import detailIntro
from .api import areaCode
from .api import searchKeyword
from .api import areaBasedList
from .api import detailCommon, areaBasedList_alltype

# """"""""""
# rank
# enterprise 정보 상세 조회
# """"""""""
@api_view(['GET'])
def enterprise(request):
    str_contentid = request.GET.get("contentid",'')
    str_contenttypeid = request.GET.get("contenttypeid",'')

    res = detailIntro(str_contentid, str_contenttypeid)
    return Response(res)

# """"""""""
# rank
# 지역 코드 조회 -> 결과 값 그대로 리턴
# """"""""""
@api_view(['GET'])
def areacode(request):
    str_areacode = request.GET.get("areacode",'')

    res = areaCode(str_areacode)
    return Response(res)

# """"""""""
# rank
# 키워드 검색 조회 -> 랭킹 3순위까지 리턴
# """"""""""
@api_view(['GET'])
def rank(request):
    str_keyword = request.GET.get("rank",'')

    res = searchKeyword(str_keyword)
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

    res = areaBasedList(str_areacode,str_sigungucode,
                                str_cat1,str_cat2,str_cat3,str_page)
    return Response(res)



# """"""""""
# location_alltype
# 지역에 따라 검색한 결과 제공
# """"""""""
@api_view(['GET'])
def location_alltype(request):
    str_areacode = request.GET.get("areacode",'')
    str_sigungucode = request.GET.get("sigungucode",'')
    str_contentTypeId = request.GET.get("contenttypeid",'')

    res = areaBasedList_alltype(str_areacode,str_sigungucode, str_contentTypeId)
    return Response(res)


# """"""""""
# detailCommon
# spot 의 overview 및 좌표 위치 제공
# """"""""""
@api_view(['GET'])
def spot(request):
    str_contentid = request.GET.get("contentid",'')
    str_contenttypeid = request.GET.get("contenttypeid",'')

    res = detailCommon(str_contentid,str_contenttypeid)
    return Response(res)

