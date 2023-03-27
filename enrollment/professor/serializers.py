from rest_framework import serializers
from .models import Professor


class ProfessorSerializer(serializers.HyperlinkedModelSerializer):
    date_joined = serializers.DateTimeField(
        format="%d-%m-%Y %I:%M%p", read_only=True)

    class Meta:
        model = Professor
        fields = ('id', 'first_name',
                   'last_name','age','gender','date_joined')
        read_only_fields = ('id', 'date_joined')