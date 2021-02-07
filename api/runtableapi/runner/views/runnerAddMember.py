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
        Runner.objects.create(name="Name", total=0)
        
        running = Running.objects.values_list('day', flat=True)
        running = list( dict.fromkeys(running) )
 
        for i in running:
            Running.objects.create(day=i, distant=0 , runner= Runner.objects.get(runner_id=Runner.objects.count()))

        return Response("", status=status.HTTP_200_OK)


# def post(self, request, *arg, **kwargs):
#         # datas = {}
#         # runnerLast = []
#         # Runner.objects.count()
#         # datas = {
#         #     "runner_id": Runner.objects.count(),
#         #     # "name": "Name",
#         #     # "total": 0,
#         # }
#         Runner.objects.create(name="Name", total=0)
        
#         running = Running.objects.values_list('day', flat=True)
#         running = list( dict.fromkeys(running) )
#         # for i in running:
#         #     datas.append(
#         #         {
#         #             "day": i,
#         #             "distant": 0,
#         #             "runner": {
#         #                 Runner.objects.all().last
#         #             }
#         #         }
#         #     )

#         for i in running:
#             Running.objects.create(day=i, distant=0 , runner= Runner.objects.get(runner_id=Runner.objects.count()))

#         # Running.objects.create(datas)


#         print(Running(day=1, distant=0 , runner= Runner.objects.get(runner_id=4)))
#         # print()
#         return Response("", status=status.HTTP_200_OK)

       
