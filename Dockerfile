FROM node:10-alpine

RUN mkdir -p /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN cd /app && npm install

COPY public /app/public
COPY server /app/server
COPY server-local.js /app/server-local.js

WORKDIR /app
EXPOSE 3000
CMD ["npm", "run", "start"]
