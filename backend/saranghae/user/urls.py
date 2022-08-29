from django.urls import path
from .views import KakaoLoginView

app_name = "user"

urlpatterns = [
        path('login/', KakaoLoginView.as_view() ), # /<str:code>
]

# https://stackoverflow.com/questions/28044219/urest-framework-is-not-a-registered-namespace
# https://www.google.com/search?q=django.urls.exceptions.NoReverseMatch%3A+%27rest_framework%27+is+not+a+registered+namespace&rlz=1C5CHFA_enKR967KR968&ei=wd4MY9qiFdjN-QbbibPQAg&ved=0ahUKEwiah-ePsuz5AhXYZt4KHdvEDCoQ4dUDCA4&uact=5&oq=django.urls.exceptions.NoReverseMatch%3A+%27rest_framework%27+is+not+a+registered+namespace&gs_lcp=Cgdnd3Mtd2l6EAMyBAgAEBM6CQgAEB4QsAMQCkoECEEYAUoECEYYAFChA1ihA2DLCWgDcAB4AIABeYgBeZIBAzAuMZgBAKABAqABAcgBAcABAQ&sclient=gws-wiz
