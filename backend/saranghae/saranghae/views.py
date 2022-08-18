from django.shortcuts import render
from .api import test_tour_api


def index(request):
    res = test_tour_api()
    overview = res
    context = {'overview': overview} 
    return render(request, 'index.html', context)




