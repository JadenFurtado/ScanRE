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
            os.system('docker run --rm -v "'+self.path+'/'+self.repoName+':/src" returntocorp/semgrep semgrep --config=auto --output=output.json --json --verbose')
            os.system('mv '+self.path+'/'+self.repoName+'/output.json '+self.scanResultPath+'/'+self.repoName+'.json')
            return "success"
        except:
            print("error")
            return "failed"
        
    # scan code using ORT
    async def scanWithORTandDeepSemgrep(self):
        try:
            # ORTpath = 'C:/Users/hdrah/Documents/Projects/ort/cli/build/install/ort/bin/'
            # clonePath = 'C:/Users/hdrah/Documents/Projects/BEProjectScannedRepos/'
            #make sure npm or other package magaer is installed
            
            #chore: set up script to install all package managers(pip, npm, go, go dep) in an automated fashion (for repos with go code, there will have to be in the $GOPATH/src)
            
            # ORTpath = 'C:/Users/complab304pc31/Documents/Group20/ort/cli/build/install/ort/bin/'
            # clonePath = 'C:/Users/complab304pc31/Documents/Group20/ScannedRepos/'
            # GOPATH = 'C:/Users/complab304pc31/go'

            #Ubuntu variables
            ORTpath = '/home/complab304pc30/Documents/Group20/ort/cli/build/install/ort/bin/'
            GOPATH = '/home/complab304pc30/go'
            GoClonePath = GOPATH +'/src/k8s.io/'
            repoNamed = 'kubernetes'
            clonePath = '/home/complab304pc30/Documents/Group20/ScannedRepos/'
            #This is specifically for go code (Figure out how to recognize)
            os.system(ORTpath + 'ort --debug --stacktrace -P ort.analyzer.allowDynamicVersions=true analyze -i '+ GoClonePath + repoNamed +' -o '+ GoClonePath + repoNamed +'ORTAnalyzerOutput -f JSON')
            #This command runs the ORT analyzer on the codeORTpath = '/home/complab304pc30/Documents/Group20/ort/cli/build/install/ort/bin/'
            os.system(ORTpath + 'ort --debug --stacktrace -P ort.analyzer.allowDynamicVersions=true analyze -i '+ clonePath + repoNamed +' -o '+clonePath + repoNamed +'ORTAnalyzerOutput -f JSON')
            #This command downloads all the dpendencies of the code
            os.system(ORTpath + 'ort download -i '+clonePath+ repoNamed+'ORTAnalyzerOutput/analyzer-result.json -o '+ clonePath+ repoNamed+'ORTDownloadOutput')
            # docker run --rm -v "C:/Users/complab304pc31/Documents/Group20/ScannedRepos/mime-types:/src" returntocorp/semgrep semgrep --config=auto --output=output.json --json
            os.system('sudo docker run --rm -v "'+clonePath+ repoNamed+'ORTDownloadOutput'+':/src" returntocorp/semgrep semgrep --config=auto --output=output.json --json --verbose')
            return "success"
        except:
            print("error with ORT")
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

