from django.conf import settings
from django.core import serializers

from rest_framework import status
# from rest_framework.authentication import TokenAuthentication
# from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from ..serializers import RunnerSerializer, RunningSerializer

from ..models import Runner, Running

class RunnerView(APIView):
    def get(self, request):
        data = []

        runners = Runner.objects.all().order_by("-total") # ('-total')
        for runner in runners:
            run_data = []
            total = 0

            runnings = Running.objects.filter(runner=runner)
            for running in runnings:
                run_data.append(
                    {
                        "running_id": running.running_id,
                        "day": running.day,
                        "distant": running.distant,
                        "date": running.date,
                    }
                )
                total += running.distant

            data.append(
                {
                    "runner_id": runner.runner_id,
                    "name": runner.name,
                    "running": run_data,
                    "total": total
                }
            )

            
        return Response(data,status=status.HTTP_200_OK)

    # def get(self, request):
    #     run = Running.objects.all()
    #     serializer = RunningSerializer(run, many=True)
    #     return Response(serializer.data,status=status.HTTP_200_OK)