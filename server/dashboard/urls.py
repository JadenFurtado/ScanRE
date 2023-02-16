from django.urls import path

from . import views

urlpatterns = [
    path('', views.index),
    path('history/', views.scanHistory),
    path('scan/', views.scanResult),
    path('newScan/', views.newScan)
]
