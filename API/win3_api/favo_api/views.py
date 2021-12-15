
from rest_framework import viewsets
from core.models import Favo
from .serializers import FavoSerializer
from rest_framework import status
from rest_framework.response import Response

class FavoViewSet(viewsets.ModelViewSet):
    queryset = Favo.objects.all()
    serializer_class = FavoSerializer

    def get_queryset(self):
        return self.queryset.filter(sender=self.request.user)

    def send_favo(self, request, *args, **kwargs):
        response = {'message': 'Send FAVO is not allowed'}
        return Response(response, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, *args, **kwargs):
        response = {'message': 'Delete FAVO is not allowed'}
        return Response(response, status=status.HTTP_400_BAD_REQUEST)