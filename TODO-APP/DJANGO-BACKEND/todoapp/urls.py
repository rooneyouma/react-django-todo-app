from django.urls import path
from . import views

urlpatterns = [
    path('api/Todo/',views.todoList),
    path('api/Todo/<int:id>/',views.todoDetail)
]


