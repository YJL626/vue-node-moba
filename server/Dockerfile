# syntax=docker/dockerfile:1
FROM node:14
COPY ./ /app
WORKDIR /app
RUN npm config set registry https://registry.npm.taobao.org
RUN npm install pm2@latest -g
RUN npm install
RUN npx tsc
CMD ["./init.sh"]