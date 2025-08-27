from django.urls import path
from . import views

app_name = 'basic'

urlpatterns = [
    path('index/', views.index, name='index')
]