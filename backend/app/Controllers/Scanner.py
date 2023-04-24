import subprocess
import os
import asyncio
import json
import requests
# common scanner class for scanning repositories


class CodeScanner:
    def __init__(self, repoLink, path, repoName, scanResultPath):
        self.repoLink = repoLink
        self.path = path
        self.repoName = repoName
        self.scanResultPath = scanResultPath

    # clone code from source repository
    async def getCode(self):
        os.system('git clone '+self.repoLink+" " +
                  self.path+"/"+self.repoName+"/")
        try:
            os.system('git clone '+self.repoLink+" " +
                      self.path+"/"+self.repoName+"/")
            return "success"
        except:
            print("error")
            return "failed"

    # scan code using semgrep
    async def scanCode(self):
        try:
            os.system('docker run --rm -v "'+self.path+'/'+self.repoName +
                      ':/src" returntocorp/semgrep semgrep --config=auto --output=output.json --json --verbose')
            os.system('mv '+self.path+'/'+self.repoName+'/output.json ' +
                      self.scanResultPath+'/'+self.repoName+'.json')
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

    async def importScanData(self):
        files = {'file': open(self.scanResultPath+'/' +
                              self.repoName+'.json', 'rb')}
        values = {
            "scan_date": "2023-04-15",
            "minimum_severity": "Info",
            "active": True,
            "verified": True,
            "scan_type": "Semgrep JSON Report",
            "source_code_management_uri": self.repoLink,
            "engagement": 1,
            "engagement_id": 1,
            "product_id": 2
        }
        headers = {"Authorization": "Token "+os.getenv("TOKEN")+""}
        r = requests.post(
            str(os.getenv("DOJOURL"))+"api/v2/import-scan/", files=files, data=values, headers=headers)
        print(r.text)

    async def scanFiles(self, directoryArr):
        for directory in directoryArr:
            try:
                os.system('docker run --rm -v "'+directory +
                          ':/src" returntocorp/semgrep semgrep --config=auto --output=output.json --json --verbose')
                os.system('mv '+directory+'/output.json ' +
                          self.scanResultPath+'/'+self.repoName+'.json')
                files = {'file': open(
                    self.scanResultPath+'/'+self.repoName+'.json', 'rb')}
                values = {
                    "scan_date": "2023-04-15",
                    "minimum_severity": "Info",
                    "active": True,
                    "verified": True,
                    "scan_type": "Semgrep JSON Report",
                    "source_code_management_uri": URL,
                    "engagement": 1,
                    "engagement_id": 1,
                    "product_id": 2
                }
                headers = {"Authorization": "Token "+os.getenv("TOKEN")+""}
                r = requests.post(
                    str(os.getenv("DOJOURL"))+"api/v2/import-scan/", files=files, data=values, headers=headers)
                print(r.text)
                return "success"
            except:
                print("error")
                return "failed"
