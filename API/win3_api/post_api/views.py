import rest_framework
from rest_framework import serializers
from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions
from rest_framework import viewsets
from core.models import  Contents
from .selializer import ContentsSerializer

class ContentsViewSet(APIView):
    serializer_class = ContentsSerializer
    queryset = Contents.objects.all()
    