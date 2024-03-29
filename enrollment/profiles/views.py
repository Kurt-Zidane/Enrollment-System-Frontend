from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets, generics
from .serializers import ProfileSerializer
from .models import Profile


class ProfileViewSet(generics.RetrieveUpdateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()

    def get_queryset(self):
        user = self.request.user
        queryset = Profile.objects.filter(owner=user)
        return queryset
    
    
class ProfilesViewSet(generics.ListAPIView):
    # permission_classes = [IsAuthenticated]
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()

    
    
