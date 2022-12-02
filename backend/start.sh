celery \
-A app.routes.celery worker \
--loglevel=info -P gevent & \
flask run