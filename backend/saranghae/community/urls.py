from django.urls import path
from .views import magazine_list, magazine_detail, heart_yn, heart_list, bookmark_yn, bookmark_list

app_name = "community"

urlpatterns = [
    path('mz', magazine_list.as_view()),
    path('mz/<int:pk>/', magazine_detail, name="magazine-detail"),
    # path("mz_comment/<int:pk>")
    
    path('like', heart_yn.as_view()), 
    path('likelist', heart_list.as_view()),
    path('bookmark', bookmark_yn.as_view()), 
    path('bookmarklist', bookmark_list.as_view()),
    
]