echo "[*] Start the backend" & \

cd backend && ./start.sh & \

echo "[*] Starting Django server" & \

cd server && python3 manage.py runserver 0.0.0.0:8000 & \

echo "[*] Starting File Manager" & \

cd fileManager && php -S 0.0.0.0:5555

echo "[*] Starting SOAR example" & \

cd SOARexample && ./dc-up.sh postgres-redis