from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('profiles/<pk>', views.ProfileViewSet.as_view()),
    path('profiles/', views.ProfilesViewSet.as_view()),

]