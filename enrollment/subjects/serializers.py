from rest_framework import serializers
from .models import Subject
from professor.models import Professor
from students.models import Student

class SubjectSerializer(serializers.HyperlinkedModelSerializer):
    date_added = serializers.DateTimeField(
        format="%d-%m-%Y %I:%M%p", read_only=True)

    professors = serializers.SlugRelatedField(
        queryset=Professor.objects.all(), many=True, slug_field='full_name', allow_null=True)

    students = serializers.SlugRelatedField(
        queryset=Student.objects.all(), many=True, slug_field='full_name', allow_null=True)

    class Meta:
        model = Subject
        fields = ('id', 'subject_name',
                  'description', 'course_id', 'date_added', 'professors', 'students')
        read_only_fields = ('id', 'date_added',
                            'professors', 'students')


class SubjectProfessorSerializer(serializers.ModelSerializer):
    date_joined = serializers.DateTimeField(
        format="%d-%m-%Y %I:%M%p", read_only=True)

    professor_assigned = serializers.SlugRelatedField(
        queryset=Professor.objects.all(), slug_field='full_name', allow_null=True)

    subject = serializers.SlugRelatedField(
        queryset=Subject.objects.all(), slug_field='subject_name', allow_null=True)

    class Meta:
        model = Subject
        fields = ('id', 'subject', 'professor_assigned',  'date_joined')
        read_only_fields = ('id', 'professor_assigned',
                            'subject', 'date_joined')


class SubjectStudentSerializer(serializers.ModelSerializer):
    date_joined = serializers.DateTimeField(
        format="%d-%m-%Y %I:%M%p", read_only=True)

    student_assigned = serializers.SlugRelatedField(
        queryset=Student.objects.all(), slug_field='full_name', allow_null=True)

    subject = serializers.SlugRelatedField(
        queryset=Subject.objects.all(), slug_field='subject_name', allow_null=True)

    class Meta:
        model = Subject
        fields = ('id', 'subject', 'student_assigned', 'date_joined')
        read_only_fields = ('id', 'professor_assigned',
                            'subject', 'date_joined')
