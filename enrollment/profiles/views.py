from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets
from .serializers import ProfileSerializer
from .models import Profile


class ProfileViewSet(viewsets.ModelViewSet):
    # permission_classes = [IsAuthenticated]
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()

    def get_queryset(self):
        queryset = Profile.objects.all().order_by('date_joined')
        return queryset