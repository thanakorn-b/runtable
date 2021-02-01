from rest_framework import serializers
from .models import Runner, Running

# class RunnerSerializer(serializers.ModelSerializer):
# 	class Meta:
# 		model = Runner
# 		fields ='__all__'

class RunningSerializer(serializers.ModelSerializer):
    class Meta:
        model = Running
        fields =('id', 'day', 'distant')

class RunnerSerializer(serializers.ModelSerializer):
    running = RunningSerializer()

    class Meta:
        model = Runner
        fields = ('name', 'running')


