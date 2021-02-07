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

class RunnerAddMemberView(APIView):
     def post(self, request, *arg, **kwargs):
        datas = []
        runnerLast = []
        # Runner.objects.create(name="Name", total=0)
        # print(Runner.objects.all())
        
        # running = Running.objects.values_list('day', flat=True)
        # running = list( dict.fromkeys(running) )
        # for i in running:
        #     datas.append(
        #         {
        #             "day": i,
        #             "distant": 0,
        #         }
        #     )

        


        return Response(datas, status=status.HTTP_200_OK)


       
