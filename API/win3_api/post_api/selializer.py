from rest_framework import serializers
from core.models import Contents

class ContentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contents
        fields = ('title','thum_img','contents')