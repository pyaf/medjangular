from django.conf.urls import  url


from API.views import *

urlpatterns = [
    url(r'^products/$', ProductView.as_view()),


]
