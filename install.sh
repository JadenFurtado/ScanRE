#!/bin/bash
echo "To install ScanRE press 1, to start ScanRE press 2"
read input
if [[ $input == "1" ]]; then
    echo "cloning ScanRE into directory" &

    git clone https://github.com/JadenFurtado/BeProject.git &

    echo "installing requirements from requirements.txt"

    cd BeProject/backend && ./scaffold.sh &

    cd ../..

    echo "cloning Visualizer based of DefectDojo" &

    git clone https://github.com/JadenFurtado/SOARtool.git &

    cd SOARtool && ./dc-build.sh
else
    # should the bash script fail(for any given reason!), you can manually start ScanRE's components using the below commands in the respective directories
    echo "[*] Start the backend" &

    cd backend && ./start.sh &

    echo "[*] Starting SOAR example" &

    cd SOARexample && ./dc-up.sh postgres-redis

    echo "[*] Starting Django server" &

    cd server && python3 manage.py runserver 0.0.0.0:8000 &

    echo "[*] Starting File Manager" &

    cd fileManager && php -S 0.0.0.0:5555

fi
# We were unable to merge all files into a single executable given the complexity of the code!