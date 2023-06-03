import subprocess
import os
import asyncio
import json
import requests
# common scanner class for scanning repositories


class CodeScanner:
    def __init__(self,repoLink,path,repoName,scanResultPath,ortPath):
        self.repoLink=repoLink
        self.path=path
        self.repoName = repoName
        self.scanResultPath = scanResultPath
        self.ortPath = ortPath
        # self.GOPATH = goPath
    # clone code from source repository
    async def getCode(self):
        try:
            print("cloning code"+self.repoLink)
            os.system('GIT_TERMINAL_PROMPT=0 git clone '+self.repoLink+" "+self.path+self.repoName+"/ --depth 1")
            return "success"
        except:
            print("error")
            return "failed"

    # scan code using semgrep
    async def scanCode(self):
        try:
            os.system('docker run --rm -v "'+self.path+'/'+self.repoName +
                      ':/src" returntocorp/semgrep semgrep --config=auto --output=output.json --json --verbose')
            os.system('mv -i '+self.path+'/'+self.repoName+'/output.json ' +
                      self.scanResultPath+'/'+self.repoName+'.json')
            return "success"
        except:
            print("error")
            return "failed"
        
    # scan code using ORT
    async def scanWithORTandDeepSemgrep(self):
        try:
            ORTpath = self.ortPath
            repoNamed = self.repoName
            clonePath = self.path
            print(ORTpath + 'ort --debug --stacktrace -P ort.analyzer.allowDynamicVersions=true analyze -i '+ clonePath + repoNamed +' -o '+clonePath + repoNamed +'ORTAnalyzerOutput -f JSON')
            print(clonePath + repoNamed +'ORTAnalyzerOutput')
            return "success"
        except:
            print("error with ORT")
            return "failed"

    # delete the code to conserve memory
    async def cleanUp(self):
        try:
            os.system('rm -rf '+self.path+'/'+self.repoName+'/')
            print("success")
            return "success"
        except:
            return "failed"