from django.contrib.auth.models import User
from rest_framework import serializers

class CustomUserSerializer(serializers.ModelSerializer):
    profile = serializers.PrimaryKeyRelatedField(
        many=False, allow_null=False, read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'profile']
        read_only_fields = ['id', 'profile'] 

