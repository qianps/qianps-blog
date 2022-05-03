FROM node:alpine

COPY ["package.json", "/root/qianps-blog/"]
WORKDIR /root/qianps-blog
RUN yarn install

ENTRYPOINT yarn run docs:dev
EXPOSE 8080