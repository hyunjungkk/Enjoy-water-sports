from django.urls import path
from .views import magazine_list, magazine_detail, heart_yn, heart_list

app_name = "community"

urlpatterns = [
    path('mz', magazine_list, name="magazine-list"),
    path('mz/<int:pk>/', magazine_detail, name="magazine-detail"),
    # path("mz_comment/<int:pk>")
    
    path('like', heart_yn.as_view()), 
    path('likelist', heart_list.as_view()),
    
]