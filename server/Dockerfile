# syntax=docker/dockerfile:1
FROM node:14-alpine
COPY ./ /app
WORKDIR /app
RUN npm config set registry https://registry.npm.taobao.org
RUN npm install 
RUN npx tsc 
CMD [ "npm", "run serve" ]
