# app폴더 urls.py
# urls.py에서 tourapi앱에서 사용하는 url을 모두 가져옵니다.

from django.urls import path
from . import views #현재 폴더에 있는 views에 접근하기 때문

app_name = 'tourapi' # app_name에는 앱 이름을 넣어줍니다.

urlpatterns = [
    path('enterprise/', views.enterprise, name='enterprise'),
    path('areacode/', views.areacode, name='areacode'),
    path('rank/', views.rank, name='rank'),
    path('locationlist/', views.locationlist, name='locationlist'),
    path('spot/', views.spot, name='spot'),
    path('spotalltype/', views.location_alltype, name='locationalltype'),
]