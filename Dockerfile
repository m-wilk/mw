FROM node:19-alpine

WORKDIR /mw-front/app

COPY ./app/package.json .

RUN npm install

COPY ./app .

CMD ["npm", "start"]
