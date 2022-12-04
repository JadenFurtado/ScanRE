import subprocess
import os
import asyncio
import json 

# common scanner class for scanning repositories
class CodeScanner:
    def __init__(self,repoLink,path,repoName,scanResultPath):
        self.repoLink=repoLink
        self.path=path
        self.repoName = repoName
        self.scanResultPath = scanResultPath
    
    # clone code from source repository
    async def getCode(self):
        try:
            os.system('git clone '+self.repoLink+" "+self.path+"/"+self.repoName+"/")
            return "success"
        except:
            print("error")
            return "failed"

    # scan code using semgrep
    async def scanCode(self):
        try:
            #os.system('docker run --rm -v "'+self.path+'/'+self.repoName+':/src" returntocorp/semgrep semgrep --config=auto --output=output.json --json --verbose')
            # f = open(self.path+"/"+self.repoName+'.json')
            # data = json.load(f)
            # with open(self.scanResultPath, 'a',encoding='utf-8') as dumpFile:
            #     json.dump(data, dumpFile,ensure_ascii=False, indent=4)
            # f.close()
            os.system('mv /home/jaden/projects/temp/wp-redis/output.json /home/jaden/projects/output.json')
            return "success"
        except:
            print("error")
            return "failed"

    # delete the code to conserve memory
    async def cleanUp(self):
        try:
            os.system('rm -rf '+self.path+'/'+self.repoName+'/*')
            os.system('rm -rf '+self.path+'/'+self.repoName+'/.git')
            os.system('rmdir '+self.path+'/'+self.repoName)
            print("success")
            return "success"
        except:
            return "failed"

