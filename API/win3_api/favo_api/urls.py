from rest_framework.routers import DefaultRouter
from .views import FavoViewSet
from django.urls import path, include



router = DefaultRouter()
router.register(r'favo', FavoViewSet, basename='favo')

urlpatterns = [
    path('',include(router.urls))
]