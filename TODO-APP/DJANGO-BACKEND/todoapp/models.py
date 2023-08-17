from django.db import models

# Create your models here.
class Todo(models.Model):
    text = models.CharField(max_length=200)
    date = models.DateField()
    completed = models.BooleanField(default=False)

    def __str__(self):
        return f"ToDo: {self.text}"