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