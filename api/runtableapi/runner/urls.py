from django.urls import path

from .views.runner import RunnerView
from .views.runnerPut import RunnerPutView
from .views.runnerAddMember import RunnerAddMemberView
from .views.runnerAddDay import RunnerAddDayView
from .views.runnerDelete import RunnerDeleteView
from .views.ranking import RankingView

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
    path(
        'runnerAddDay/',
        RunnerAddDayView.as_view(),
        name='add_day'
    ),
    path(
        'runnerDelete/<int:run_id>/',
        RunnerDeleteView.as_view(),
        name='runner_delete'
    ),
    path(
        'ranking/',
        RankingView.as_view(),
        name='get_ranking'
    ),
]