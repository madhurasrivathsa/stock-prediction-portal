from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    password=serializers.CharField(write_only=True,min_length=8,style={'input_type':'password'})
    class Meta:
        model=User
        fields=['username','email','password']

    def create(self,validated_data):
        #User.objects.create - will save the password in a plain text
        user=User.objects.create_user(
            validated_data['username'],
            validated_data['email'],
            validated_data['password']

        )
        #ser=User.objects.create_user(**validated_data)#you can use this only when you have the required fields in a model 
        return user
