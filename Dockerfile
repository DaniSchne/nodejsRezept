FROM node:latest

RUN mkdir -p /usr/src/app 
WORKDIR /usr/src/app 

COPY ./package.json /usr/src/app/ 
RUN npm install 

# COPY . /usr/src/app 

#Solve the problem reinstaling bcrypt
RUN npm uninstall bcrypt
RUN npm i bcrypt

# Add wait-for-it
COPY wait-for-it.sh wait-for-it.sh 
RUN chmod +x wait-for-it.sh

# CMD [ "npm", "start" ]

ENTRYPOINT ["/bin/sh","-c","./wait-for-it.sh mysql:3306 -t 40 -- npm start"]
