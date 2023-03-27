from rest_framework import serializers
from .models import Subject
from professor.models import Professor


class SubjectSerializer(serializers.HyperlinkedModelSerializer):
    date_added = serializers.DateTimeField(
        format="%d-%m-%Y %I:%M%p", read_only=True)
    
    professor_assigned = serializers.PrimaryKeyRelatedField(queryset=Professor.objects.all())

    class Meta:
        model = Subject
        fields = ('id', 'subject_name',
                   'description','course_id','professor_assigned','date_added')
        read_only_fields = ('id', 'date_added')