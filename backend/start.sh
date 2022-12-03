#!/bin/bash
if [ -f "app/.env" ]; 
then

celery \
-A app.routes.celery worker \
--loglevel=info -P gevent & \
flask run

else

# is it is not exist then it will be printed
echo "Environment file is not set!"
fi