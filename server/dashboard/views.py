from django.shortcuts import render
import json
def index(request):
    return render(request,'index.html')

def scanHistory(request):
    file = open("/home/jaden/projects/temp/list.txt","r")
    return render(request,'history/index.html',{'data':file})

def scanResult(request):
    scanName = request.GET.get('scanName','')
    file = open("/home/jaden/projects/temp/"+scanName,"r")
    if scanName == None:
        return render(request,'404.html')
    else:
        scanData = json.load(file)
        results = scanData['results']
        return render(request,'scan/index.html',{'results':results,'scanName':scanName})

def newScan(request):
    return render(request,'scan/newScan.html')