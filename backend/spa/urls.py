from django.contrib import admin
from django.urls import path, include
from .views import *

urlpatterns = [
    path('', start_page, name='start_url'),
]
