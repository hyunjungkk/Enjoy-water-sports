from urllib.parse import urlencode, unquote, quote_plus
import requests
from bs4 import BeautifulSoup
from . import my_settings

serviceKey = my_settings.API_KEY
# serviceKeyDecoded = unquote(serviceKey, 'UTF-8')

def test_tour_api():
    overview = []
    url = "https://apis.data.go.kr/B551011/KorService/detailCommon"
    
    MobileOS="ETC"
    MobileApp="app"
    _type="JSON"
    contentId="126508"
    contentTypeId="12"
    defaultYN="N"
    firstImageYN="N"
    areacodeYN="N"
    catcodeYN="N"
    addrinfoYN="N"
    mapinfoYN="N"
    overviewYN="Y"

    queryParams = '?' + urlencode({ quote_plus('serviceKey') : serviceKey, 
                                    quote_plus('MobileOS') : MobileOS, 
                                    quote_plus('MobileApp') : MobileApp, 
                                    quote_plus('_type') : _type, 
                                    quote_plus('contentId') : contentId, 
                                    quote_plus('contentTypeId') : contentTypeId,
                                    quote_plus('defaultYN') : defaultYN, 
                                    quote_plus('firstImageYN') : firstImageYN, 
                                    quote_plus('areacodeYN') : areacodeYN, 
                                    quote_plus('catcodeYN') : catcodeYN, 
                                    quote_plus('addrinfoYN') : addrinfoYN, 
                                    quote_plus('mapinfoYN') : mapinfoYN, 
                                    quote_plus('overviewYN') : overviewYN  })
                                    
    res = requests.get(url + queryParams, verify=False)
    xml = res.text
    soup = BeautifulSoup(xml, 'html.parser')
    for tag in soup.find_all('overview'):
        overview.append(tag.text)

    res = overview
    # res = dict(zip(station))
    return res