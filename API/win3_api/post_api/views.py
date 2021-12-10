import rest_framework
from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions
from rest_framework import generics

class Contents(APIView):
    authentication_classes = (authentication.TokenAuthentication,)
    permission_classes = (permissions.IsAdminUser)

    def get(self,request, format = None):
        pass
    def post(self,request,format = None):
        pass


class UserList(generics.ListCreateAPIView):
    queryset = objects.all()
    serializer_class = ''

class MyPagenations(pageination.PageNumberPagination):
    page_size = 30