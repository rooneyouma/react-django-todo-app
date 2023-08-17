from django.shortcuts import render, get_object_or_404
from .serializers import todoSerializer
from .models import Todo
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
@api_view(['GET','POST'])
def todoList(request, format=None):
    if request.method == 'GET':
        todos = Todo.objects.all()
        serializer = todoSerializer(todos, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = todoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        

@api_view(['GET','PUT','DELETE'])
def todoDetail(request, id, format=None):

    todo = get_object_or_404(Todo, pk=id)

    if request.method == 'GET':
        serializer = todoSerializer(todo)
        return Response(serializer.data)

    if request.method == 'PUT':
        serializer=todoSerializer(todo, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
    if request.method == 'DELETE':
        todo.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
