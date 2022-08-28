from rest_framework import serializers
from .models import Magazine #, Magazine_Comment

# Magazine list
class MagazineListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Magazine
        fields = ('id', 'writer', 'title', 'overview', 'create_at')

# Magazine detail
class MagazineDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Magazine
        fields = ('id', 'writer', 'title', 'overview', 'content', 'create_at')



# all Comment 
# class MagazineCommentSerializer(serializers.ModelSerializer) :
#     class Meta :
#         model = Magazine_Comment
#         fields ='__all__'

# comments of magazine
# class MagazineDetailCommentSerializer(serializers.ModelSerializer):
#     parent_comments = serializers.SerializerMethodField()

#     class Meta:
#         model = Magazine
#         fields = ('id', 'parent_comments')

#     def get_parent_comments(self, obj):
#         parent_comments = obj.comments.filter(parent=None)
#         serializer = CommentSerializer(parent_comments, many=True)
#         return serializer.data