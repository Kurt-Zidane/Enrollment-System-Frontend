from rest_framework import serializers
from .models import Profile


class ProfileSerializer(serializers.HyperlinkedModelSerializer):
    date_joined = serializers.DateTimeField(
        format="%d-%m-%Y %I:%M%p", read_only=True)
    owner = serializers.ReadOnlyField(source='owner.username')
    
    class Meta:

        model = Profile
        fields = ('id','first_name', 'mi', 'suffix', 'owner',
                   'last_name','gender', 'address','date_joined','image','birthdate')
        read_only_fields = ('id','date_joined','owner')