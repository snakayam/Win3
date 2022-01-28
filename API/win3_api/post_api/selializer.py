from rest_framework import serializers
from core.models import Contents

class ContentsSerializer(serializers.ModelSerializer):
    created_on = serializers.DateTimeField(format="%Y-%m-%d", read_only=True)

    class Meta:
        model = Contents
        fields = ('title','thum_img','contents','made_by','created_on')
        extra_kwargs = {'made_by': {'read_only': True}}