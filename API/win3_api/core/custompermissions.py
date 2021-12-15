from rest_framework.permissions import BasePermission
from rest_framework.permissions import SAFE_METHODS



class ProfilePermission(BasePermission):

    def has_object_premission(self,request,view,obj):
        if request.method in SAFE_METHODS:
            return True
        
        return obj.userPro.id == request.user.id

