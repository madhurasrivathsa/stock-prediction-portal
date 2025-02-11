from django.contrib import admin
from django.urls import path,include
from accounts import views 
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView

urlpatterns = [
   
    path('register/',views.RegisterView.as_view()),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]