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

class RunnerPutView(APIView):
     def put(self, request, *arg, **kwargs):
        dataTest = []
        dataTotal = []
        y = []
        x =[]    
        dataRun = request.data

        for i in Runner.objects.values_list('runner_id', flat=True): # .order_by('runner_id')
            dataTest = dataTest + dataRun[i-1]["running"]
            for item in dataRun:
                if item['runner_id'] == i:
                    Runner.objects.filter(runner_id=i).update(name=item["name"])
                    y = item['running']
                    z = 0
                    for j in y:
                        z = z + j['distant']
                    Runner.objects.filter(runner_id=i).update(total=z)
            
        for i in Running.objects.values_list('running_id', flat=True):
            for item in dataTest:
                if item['running_id'] == i:
                    Running.objects.filter(running_id=i).update(distant=item['distant'])

        return Response(dataRun, status=status.HTTP_200_OK)
