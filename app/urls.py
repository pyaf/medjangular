from django.conf.urls import include, url
from django.contrib import admin
from django.views.generic import TemplateView

from app.views import *

urlpatterns = [
    url(r'^$', IndexView),
    url(r'^dashboard/', DashboardView),
    url(r'^logout/$', LogoutView),

]
