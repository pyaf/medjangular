from django.conf.urls import  url


from API.views import *

urlpatterns = [
    url(r'^products/$', ProductView.as_view()),
    url(r'^products/update/(?P<pk>\d+)/$', ProductUpdateView.as_view(), name='product_update'),
    url(r'^products/delete/(?P<pk>\d+)/$', ProductDeleteView, name='product_update'),


]
