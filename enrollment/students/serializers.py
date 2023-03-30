from rest_framework import serializers
from .models import Student
from subjects.models import Subject


class StudentSerializer(serializers.HyperlinkedModelSerializer):
    date_joined = serializers.DateTimeField(
        format="%d-%m-%Y %I:%M%p", read_only=True)

    subjects = serializers.SlugRelatedField(
        queryset=Subject.objects.all(), many=True, slug_field='course_id', allow_null=True)

    class Meta:
        model = Student
        fields = ('id', 'first_name', 'last_name', 'age', 'gender', 'address',
                  'date_joined', 'subjects',
                  'form137_done', 'PSA_done', 'TwoByTwo_done', 'GoodMorale_done')
        read_only_fields = ('id', 'date_joined', 'subjects')
