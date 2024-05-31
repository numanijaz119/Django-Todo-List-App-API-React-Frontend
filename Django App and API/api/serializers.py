from rest_framework import serializers
from base.models import Task
from django.contrib.auth.models import User


class TaskSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')
    class Meta:
        model = Task
        fields = '__all__'

