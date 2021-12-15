from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

app_name = 'post'

router = DefaultRouter()
router.register('post', views.ContentsViewSet, basename='post')

urlpatterns = [
    path('',include(router.urls))
]