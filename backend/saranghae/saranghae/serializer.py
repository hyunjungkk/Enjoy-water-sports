from django.core import serializers
from rest_framework import serializers
from .models import Test

class TestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Test
        fields = ['title', 'author']
    title = serializers.CharField(max_length=100)
    author = serializers.CharField(max_length=100)
