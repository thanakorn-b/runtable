from django.contrib import admin

from .models import Runner, Running

class RunnerAdmin(admin.ModelAdmin):
    pass

admin.site.register(Runner, RunnerAdmin)


class RunningAdmin(admin.ModelAdmin):
    pass

admin.site.register(Running, RunningAdmin)