from django.conf import settings
from django.core import serializers

from rest_framework import status
# from rest_framework.authentication import TokenAuthentication
# from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from ..serializers import RunnerSerializer, RunningSerializer

from ..models import Runner, Running

class RankingView(APIView):
    def get(self, request):
        # data = []

        # runners = Runner.objects.all().order_by("-total") # ('-total')
        # for runner in runners:
        #     data.append(
        #         {
        #             "runner_id": runner.runner_id,
        #             "name": runner.name,
        #             "total": runner.total,
        #         }
        #     )
        data = []
        run_data = []

        runners = Runner.objects.all().order_by("-total") # ('-total')
        for runner in runners:
            run_data.append(
                {
                    "runner_id": runner.runner_id,
                    "name": runner.name,
                    "total": runner.total,
                }
            )

        data.append(
           {
               "max_total": run_data[0]["total"],
               "rank": run_data,
            }
        )

            

            
        return Response(data,status=status.HTTP_200_OK)
