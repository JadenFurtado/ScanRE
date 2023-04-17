import requests

def importScanData(filePath):
    files = {'file': open(filePath, 'rb')}
    values = {
        "scan_date": "2023-04-15",
        "minimum_severity": "Info",
        "active": True,
        "verified": True,
        "scan_type": "Semgrep JSON Report",
        "engagement": 1,
        "engagement_id": 1,
        "product_id": 2
    }
    headers={"Authorization":"Token dae97cd778d00582a9f5b597d760eca760c02ec5"}
    r = requests.post(
        "http://127.0.0.1:8080/api/v2/import-scan/", files=files, data=values,headers=headers)
    print(r.text)

fileRes= open('/home/jaden/projects/results/1k/results/out.txt','r')
for file in fileRes:
    file = file.strip()
    print("[*] "+file)
    importScanData("/home/jaden/projects/results/1k/results/"+file)
    print()
