from rest_framework import permissions

class ProfielePermission(permissions.BasePremission):

    def has_object_premission(self,request,view,obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        
        return obj.userPro.id == request.user.id

