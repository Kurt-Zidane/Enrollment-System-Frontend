from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'subjects', views.SubjectViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    # Individual views that are not sets (For GET only are here)
    path('subjects_professors/', views.SubjectProfessorViewSet.as_view()),
    path('subjects_students/', views.SubjectStudentViewSet.as_view()),
]
