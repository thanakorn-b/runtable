from django.db import models



class Runner(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=50, default="")
    total = models.IntegerField(default=0)

    def __str__(self):
        return self.name

class Running(models.Model):
    id = models.IntegerField(primary_key=True)
    day = models.IntegerField()
    distant = models.IntegerField()

    runner = models.ForeignKey(Runner, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return "%s : day %s : %s km" % (self.runner, self.day, self.distant)
