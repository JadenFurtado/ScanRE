import requests

def importScanData():
    files = {'file': open('/home/jaden/projects/temp/leadin.json', 'rb')}
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
    headers={"Authorization":"Token dae97cd778d00582a9f5b597d760eca760c02ec5"}
    r = requests.post(
        "http://127.0.0.1:8080/api/v2/import-scan/", files=files, data=values,headers=headers)
    print(r.text)