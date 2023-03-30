from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets
from rest_framework import generics
from .serializers import SubjectSerializer, SubjectProfessorSerializer, SubjectStudentSerializer
from .models import Subject, SubjectProfessor, SubjectStudent


class SubjectViewSet(viewsets.ModelViewSet):
    # permission_classes = [IsAuthenticated]
    serializer_class = SubjectSerializer
    queryset = Subject.objects.all().order_by('date_added')


class SubjectProfessorViewSet(generics.ListAPIView):
    # permission_classes = [IsAuthenticated]
    serializer_class = SubjectProfessorSerializer
    queryset = SubjectProfessor.objects.all().order_by('date_joined')


class SubjectStudentViewSet(generics.ListAPIView):
    # permission_classes = [IsAuthenticated]
    serializer_class = SubjectStudentSerializer
    queryset = SubjectStudent.objects.all().order_by('date_joined')
