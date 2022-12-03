#!/bin/bash

pip install -r requirements.txt & \

docker pull returntocorp/semgrep & \

docker run --rm -d \
--name redis-stack-server \
-p 6379:6379 \
redis/redis-stack-server:latest