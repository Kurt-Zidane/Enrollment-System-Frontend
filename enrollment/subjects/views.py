from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets
from .serializers import SubjectSerializer
from .models import Subject


class SubjectViewSet(viewsets.ModelViewSet):
    # permission_classes = [IsAuthenticated]
    serializer_class = SubjectSerializer
    queryset = Subject.objects.all()

    def get_queryset(self):
        queryset = Subject.objects.all().order_by('date_added')
        return queryset