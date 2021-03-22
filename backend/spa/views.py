from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET'])
def start_page(request):
    a = {
        "me": 1,
        "y0u": 2
    }

    return Response(a)

