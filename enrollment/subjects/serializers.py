from rest_framework import serializers
from .models import Subject


class SubjectSerializer(serializers.HyperlinkedModelSerializer):
    date_added = serializers.DateTimeField(
        format="%d-%m-%Y %I:%M%p", read_only=True)

    class Meta:
        model = Subject
        fields = ('id', 'subject_name',
                   'description','course_id','professor_assigned','date_added')
        read_only_fields = ('id', 'date_added')