FROM node:alpine

COPY ["package.json", "/root/qianps-blog/"]
WORKDIR /root/qianps-blog
RUN yarn install
RUN yarn run docs:build

ENTRYPOINT yarn run docs:serve
EXPOSE 5000