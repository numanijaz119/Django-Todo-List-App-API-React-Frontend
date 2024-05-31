from django.urls import path
from . import views
from .views import createTask
from .views import MyTokenObtainPairView
from rest_framework_simplejwt.views import TokenRefreshView


urlpatterns = [
    path('', views.getRoutes),
    path('register/', views.registerUser),
    path('tasks/', views.getTasks),
    path('tasks/<int:pk>', views.getTask),
    path('create-task/', createTask),
    path('tasks/update-task/<int:pk>/', views.taskUpdate),
    path('tasks/delete-task/<int:pk>/', views.taskDelete),

    # SIMPLE JWT URLS
    path('token/', MyTokenObtainPairView.as_view(), name='token'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

] 