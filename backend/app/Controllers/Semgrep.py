import semgrep
import subprocess
import docker

class SemgrepController:
    def __init__(self):
        print("called")
    
    def scan(self, path):
        subprocess.Popen('echo "Geeks 4 Geeks"', shell=True)
        #subprocess.call(["semgrep", "-l"])
        #semgrep --config=auto [PATH/TO/SRC]
    
    def startContainer(self,containerName):
        pass 


    