FROM python:3

RUN apt-get update -y
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install -y nodejs

RUN mkdir /server
WORKDIR /server
ADD . /server/

RUN python3 --version
RUN pip3 install -r requirements.txt
RUN npm i