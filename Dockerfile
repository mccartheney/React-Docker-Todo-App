FROM node:latest

WORKDIR /app

ADD package*.json .

ADD . .

RUN npm install

CMD npm start