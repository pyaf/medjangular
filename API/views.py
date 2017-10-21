from django.shortcuts import render, HttpResponse, Http404
from django.contrib.auth.models import User, Group
from django.contrib.auth import authenticate
from rest_framework.decorators import api_view

from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework import status
from rest_framework.generics import ListCreateAPIView, GenericAPIView
from rest_framework.response import Response
from rest_framework.mixins import UpdateModelMixin

import json

from .serializers import *
from app.models import Product


class ProductView(APIView):

	def get(self, request, format=None):
		serializer = ProductSerializer(Product.objects.all(),many=True)
		return Response(serializer.data)

	def post(self, request, format=None):
		serializer = ProductSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ProductUpdateView(GenericAPIView, UpdateModelMixin):
	queryset = Product.objects.all()
	serializer_class = ProductSerializer

	def put(self, request, *args, **kwargs):
		return self.update(request, *args, **kwargs)

@api_view(['GET'])
def ProductDeleteView(request, pk):
	try:
		product = Product.objects.get(pk=pk)
	except:
		raise Http404
	product.delete()
	return Response('Object Deleted', status=status.HTTP_204_NO_CONTENT) 