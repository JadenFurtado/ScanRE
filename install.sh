#!/bin/bash

echo "cloning ScanRE into directory" & \

git clone https://github.com/JadenFurtado/BeProject.git & \

echo "installing requirements from requirements.txt"

cd BeProject/backend && ./scaffold.sh & \

cd ../..

echo "cloning Visualizer based of DefectDojo" & \

git clone https://github.com/JadenFurtado/SOARtool.git & \

cd SOARtool && ./dc-build.sh