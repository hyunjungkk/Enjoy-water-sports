from django.urls import path
from .views import KakaoLoginView

app_name = "user"

urlpatterns = [
        path('login', KakaoLoginView.as_view()), # /<str:code>
]
    