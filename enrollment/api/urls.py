from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('accounts/',include('accounts.urls')),
    path('',include('subjects.urls')),
    path('',include('professor.urls')),
    path('',include('profiles.urls')),
]