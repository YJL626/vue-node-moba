# syntax=docker/dockerfile:1
FROM node:14-alpine
COPY ./ /app
WORKDIR /app
RUN npm config set registry https://registry.npm.taobao.org
RUN npm install pm2@latest -g
RUN npm install
RUN npx tsc
CMD [ "pm2", "start", "./js/app.js","--name","app","-i","0"]
