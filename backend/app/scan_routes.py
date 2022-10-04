from app import app
from flask import Flask

# starts a new scan
@app.route("/startScan")
def startScan():
    return "scan starts"

# end a scan having scanId
@app.route('/endScan/<scanId>')
def endScan(scanId):
    return "end scan"

# list current scans
@app.route("/listScans")
def listScans():
    return "list of scans"

# returns scan data by scanId
@app.route("/getScan/<scanId>")
def getScanData(scanId):
    return "scan Data"

