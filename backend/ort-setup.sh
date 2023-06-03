# pre-requisite: docker, git, java and user added to dockergroup (sudo gpasswd -a $USER docker)
git clone https://github.com/oss-review-toolkit/ort.git
cd ort/
docker build -t ort .
./gradlew installDist
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - &&\
sudo apt-get install -y nodejs