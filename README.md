# ScanRE

* Prerequisits:
System having 8Gb RAM
,Linux/Windows (We recommend running the code in Linux)
,Docker
,Git
Python3 and pip

* Running backend engine:
Navigate to the backend directory

- Create a virtualenvironment

For both Windows and Linux, you can start a virtualenvironment using: 
```
pip install virtualenv
virtualenv start myenv
source myenv/bin/activate
```

- Then, run 
```
./scaffold.sh
```
- Finally, run 
```
./run.sh
```

This starts the flask application that is a wrapper around Static code analysis tools

* Running the analytics tool(frontend):

- Clone a SOAR tool, in our case we have run our project using 
```
git clone git@github.com:JadenFurtado/SOARtool.git
# building
./dc-build.sh
# running (for other profiles besides mysql-rabbitmq look at https://github.com/DefectDojo/django-DefectDojo/blob/dev/readme-docs/DOCKER.md)
./dc-up.sh mysql-rabbitmq
# obtain admin credentials. the initializer can take up to 3 minutes to run
# use docker-compose logs -f initializer to track progress
docker-compose logs initializer | grep "Admin password:"
```

* Running the filemanager:

navigate to fileMangaer and run:
```
php -S 0.0.0.0:5555
```
