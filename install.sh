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
    echo "[*] Start the backend" &

    cd backend && ./start.sh &

    echo "[*] Starting Django server" &

    cd server && python3 manage.py runserver 0.0.0.0:8000 &

    echo "[*] Starting File Manager" &

    cd fileManager && php -S 0.0.0.0:5555

    echo "[*] Starting SOAR example" &

    cd SOARexample && ./dc-up.sh postgres-redis
fi
