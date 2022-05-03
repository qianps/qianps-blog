FROM node:alpine

COPY ["package.json", "index.js", "/root/qianps-blog/"]
WORKDIR /root/qianps-blog
RUN yarn install
RUN yarn run docs:build

ENTRYPOINT node index.js
EXPOSE 8080