import json
import jwt
import requests
from django.contrib.auth import login
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.core.files.base import ContentFile
from .models import User
from . import my_settings


class KakaoLoginView(APIView):
    def get(self, request): # , auth_code):

        # print(request.GET["code"])
        client_id = my_settings.KAKAO_REST_API_KEY
        redirect_uri = my_settings.KAKAO_REDIRECT_URI

        print()
        # print("client id :", client_id)
       
        """
        # 1. Request an access token
        """
        data = {
            "grant_type"      : "authorization_code",
            "client_id"       : client_id,
            "redirect_uri"    : redirect_uri,
            "code"            : request.GET["code"],
        } 

        kakao_token_api = 'https://kauth.kakao.com/oauth/token'         
        kakao_token_res = requests.post(kakao_token_api, data=data).json()

        error = kakao_token_res.get('error')
        if error is not None:
            raise json.JSONDecodeError(error)
        access_token = kakao_token_res["access_token"]

        # token_req = requests.get('https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id={client_id}&redirect_uri={redirect_uri}&code={auth_code}')
        # # token_json = token_req.json()
        # error = token_json.get('error')
        # if error is not None:
        #     raise json.JSONDecodeError(error)
        # access_token = token_json.get('access_token') # access token 추출


        """
        # 2. Request an user's profile
        """
        profile_req = requests.get(
            "https://kapi.kakao.com/v2/user/me", headers={"Authorization":f"Bearer {access_token}"}
        )

        user_info = profile_req.json()
        kakao_id = user_info["id"]
        email = user_info["kakao_account"]["email"]
        nickname = user_info["kakao_account"]["profile"]["nickname"]
        kakao_img_url = user_info["kakao_account"]["profile"]["profile_image_url"]

        # email = profile_json.get("kakao_account").get("email") 
        # properties = profile_json.get("kakao_account").get("profile")
        # nickname = properties.get("nickname") # 이름
        # return JsonResponse(data=properties, safe=False)

        """
        3. check DB
        """
        try: 
            user = User.objects.get(user_id=kakao_id)
            # if user.login_method != models.User.LOGIN_KAKAO:
            #     raise KakaoException()
        except User.DoesNotExist:
            user = User.objects.create(
                user_id = kakao_id, # email.split(sep='@')[0],
                email = email,
                nickname = nickname,
            )
            user.set_unusable_password()
            user.save()

            # profile image
            kakao_img = requests.get(kakao_img_url)            
            user.profile_img.save(
                    f"{kakao_id}-profile.jpg", ContentFile(kakao_img.content)
                )

        print()
        print("hehehehehehe")
        print()

        """ 
        4. login - create jwt token
        """ 
        # login(request, user) # ???

        token = TokenObtainPairSerializer.get_token(user)
        jwt_refresh_token = str(token)
        jwt_access_token = str(token.access_token)
        res = Response(
            {
                "user_id": kakao_id,
                "nickname": nickname,
                "email": email,
                "profile_img": kakao_img_url ,
                "message": "Kakao login success",
                "token": {
                    "access": jwt_access_token,
                    "refresh": jwt_refresh_token,
                },
            },
            status = status.HTTP_200_OK
        )
        res.set_cookie("access", jwt_access_token, httponly=True)
        res.set_cookie("refresh", jwt_refresh_token, httponly=True)
        
        return res
        # return redirect(reverse('kakaologin')) # redirect page는 추후 변경.
        