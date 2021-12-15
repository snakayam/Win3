from rest_framework import serializers
from core.models import Favo #, Posts

class FavoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favo
        fields = ('favoFrom','favoTo')