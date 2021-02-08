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

class RunnerDeleteView(APIView):
    def delete(self, request, *arg, **kwargs):
        run_id = self.kwargs.get('run_id', 0)
        runner = Runner.objects.get(runner_id=run_id)
        runner.delete()

        return Response(run_id, status=status.HTTP_200_OK)