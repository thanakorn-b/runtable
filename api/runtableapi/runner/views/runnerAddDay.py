from django.conf import settings
from django.core import serializers

from rest_framework import status
# from rest_framework.authentication import TokenAuthentication
# from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from ..serializers import RunnerSerializer, RunningSerializer
from collections import OrderedDict

from ..models import Runner, Running

class RunnerAddDayView(APIView):
     def post(self, request, *arg, **kwargs):
        day = 1
        running = Running
        if running.objects.exists() :
           day = Running.objects.last().day + 1

        runner = Runner.objects.values_list('runner_id', flat=True)
        runner = list( dict.fromkeys(runner) )
        
        for i in runner:
            Running.objects.create(day=day, distant=0 , runner=Runner.objects.get(runner_id=i))


        return Response(day, status=status.HTTP_200_OK)
