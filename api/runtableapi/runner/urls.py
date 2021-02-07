from django.urls import path

from .views.runner import RunnerView
from .views.runnerPut import RunnerPutView
from .views.runnerAddMember import RunnerAddMemberView

urlpatterns = [
    path(
        '',
        RunnerView.as_view(),
        name='get_all'
    ),
    path(
        'runnerPut/',
        RunnerPutView.as_view(),
        name='put_all'
    ),
    path(
        'runnerAddMember/',
        RunnerAddMemberView.as_view(),
        name='add_member'
    ),
]