from .models import User
from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()

class SignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

    def create(self, validated_data): # 회원가입
        id = validated_data.get('id')
        password = validated_data.get('password')
        profile_img = validated_data.get('profile_img')
        user_id = validated_data.get('user_id')
        email = validated_data.get('email')
        nickname = validated_data.get('nickname')
        last_login = validated_data.get('last_login')
        is_superuser = validated_data.get('is_superuser')
        is_active = validated_data.get('is_active')
        is_staff = validated_data.get('is_staff')
        user = User(
            id = id,
            profile_img = profile_img,
            user_id = user_id,
            email = email,
            nickname = nickname,
            last_login = last_login,
            is_superuser = is_superuser,
            is_active = is_active,
            is_staff = is_staff,
        )
        user.set_password(password)
        user.save()
        return user

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'