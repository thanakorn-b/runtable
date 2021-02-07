from django.db import models



class Runner(models.Model):
    runner_id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=50, default="")
    total = models.IntegerField(default=0)

    def __str__(self):
        return (self.runner_id, self.name, self.total) # this change

class Running(models.Model):
    running_id = models.IntegerField(primary_key=True)
    day = models.IntegerField()
    distant = models.IntegerField()

    runner = models.ForeignKey(Runner, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return "%s : day %s : %s km" % (self.runner, self.day, self.distant)

    # def update(self, instance, valid_data):
    #     instance.running_id = valid_data.get('running_id', instance.running_id)
    #     instance.day = valid_data.get('day', instance.day)
    #     instance.distant = valid_data.get('distant', instance.distant)
    #     # instance.name = valid_data.get('name', instance.name)
    #     # instance.total = valid_data.get('total', instance.total)
    #     instance.save()
