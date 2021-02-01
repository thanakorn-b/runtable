from django.urls import path

from .views.runner import RunnerView

urlpatterns = [
    path(
        '',
        RunnerView.as_view(),
        name='get_all'
    ),
]