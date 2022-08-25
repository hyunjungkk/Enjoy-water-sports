from urllib.parse import urlencode, unquote, quote_plus
import requests
import json
from bs4 import BeautifulSoup
from . import my_settings

serviceKey = my_settings.API_KEY
# serviceKeyDecoded = unquote(serviceKey, 'UTF-8')

def enterprise_tour_api(str_contentid, str_contenttypeid):
    overview = []
    url = "https://apis.data.go.kr/B551011/KorService/detailIntro"
    
    MobileOS="ETC"
    MobileApp="saranghae"
    _type="json"
    contentId = str_contentid #"2501905"
    contentTypeId = str_contenttypeid #"28"

    queryParams = '?' + urlencode({ quote_plus('serviceKey') : serviceKey, 
                                    quote_plus('MobileOS') : MobileOS, 
                                    quote_plus('MobileApp') : MobileApp, 
                                    quote_plus('_type') : _type, 
                                    quote_plus('contentId') : contentId, 
                                    quote_plus('contentTypeId') : contentTypeId  })
                                    
    res = requests.get(url + queryParams, verify=False)
#    xml = res.text
#    soup = BeautifulSoup(xml, 'html.parser')
#    for tag in soup.find_all('overview'):
#        overview.append(tag.text)

 #   res = overview
    # res = dict(zip(station))
    data = json.loads(res.text)

    return data


def areacode_tour_api(str_areacode):
    overview = []
    url = "https://apis.data.go.kr/B551011/KorService/areaCode"
    
    MobileOS="ETC"
    MobileApp="saranghae"
    _type="json"
    areacode = str_areacode #""

    queryParams = '?' + urlencode({ quote_plus('serviceKey') : serviceKey, 
                                    quote_plus('MobileOS') : MobileOS, 
                                    quote_plus('MobileApp') : MobileApp, 
                                    quote_plus('_type') : _type, 
                                    quote_plus('areaCode') : areacode })
                                    
    res = requests.get(url + queryParams, verify=False)
#    xml = res.text
#    soup = BeautifulSoup(xml, 'html.parser')
#    for tag in soup.find_all('overview'):
#        overview.append(tag.text)

#    res = overview
#    res = dict(zip(station))
    data = json.loads(res.text)

    return data


def rank_tour_api(str_keyword):
    overview = []
    url = "https://apis.data.go.kr/B551011/KorService/searchKeyword"
    
    numOfRows="3"
    pageNo="1"
    MobileOS="ETC"
    MobileApp="saranghae"
    _type="json"
    listYN = "Y"
    arrange = "P"
    cat1="A03"
    keyword = str_keyword

    queryParams = '?' + urlencode({ quote_plus('numOfRows') : numOfRows, 
                                    quote_plus('pageNo') : pageNo, 
                                    quote_plus('serviceKey') : serviceKey, 
                                    quote_plus('MobileOS') : MobileOS, 
                                    quote_plus('MobileApp') : MobileApp, 
                                    quote_plus('_type') : _type, 
                                    quote_plus('listYN') : listYN,
                                    quote_plus('cat1') : cat1,
                                    quote_plus('arrange') : arrange,
                                    quote_plus('keyword') : keyword
                                     })
                                    
    res = requests.get(url + queryParams, verify=False)
#    xml = res.text
#    soup = BeautifulSoup(xml, 'html.parser')
#    for tag in soup.find_all('overview'):
#        overview.append(tag.text)

#    res = overview
#    res = dict(zip(station))
    data = json.loads(res.text)

    return data


def locationlist_tour_api(str_areacode,str_sigungucode,
                          str_cat1,str_cat2,str_cat3,pageId):
    overview = []
    url = "https://apis.data.go.kr/B551011/KorService/areaBasedList"
    
    numOfRows="10"
    pageNo=pageId
    
    MobileOS="ETC"
    MobileApp="saranghae"
    _type="json"
    listYN = "Y"
    arrange = "P"
    
    areacode = str_areacode
    sigungucode=str_sigungucode
    cat1=str_cat1
    cat2=str_cat2
    cat3=str_cat3

    queryParams = '?' + urlencode({ quote_plus('numOfRows') : numOfRows, 
                                    quote_plus('pageNo') : pageNo, 
                                    quote_plus('serviceKey') : serviceKey, 
                                    quote_plus('MobileOS') : MobileOS, 
                                    quote_plus('MobileApp') : MobileApp, 
                                    quote_plus('_type') : _type, 

                                    quote_plus('listYN') : listYN,
                                    
                                    quote_plus('areaCode') : areacode,
                                    quote_plus('sigunguCode') : sigungucode,
                                    quote_plus('arrange') : arrange,
                                    quote_plus('cat1') : cat1,
                                    quote_plus('cat2') : cat2,
                                    quote_plus('cat3') : cat3
                                     })
                                    
    res = requests.get(url + queryParams, verify=False)
#    xml = res.text
#    soup = BeautifulSoup(xml, 'html.parser')
#    for tag in soup.find_all('overview'):
#        overview.append(tag.text)

#    res = overview
#    res = dict(zip(station))
    data = json.loads(res.text)

    return data

