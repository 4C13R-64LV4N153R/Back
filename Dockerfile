FROM node:16

WORKDIR /usr/src/app

ADD https://github.com/jwilder/dockerize/releases/download/v0.6.1/dockerize-linux-amd64-v0.6.1.tar.gz /tmp/dockerize.tar.gz
RUN tar -C /usr/local/bin -xzvf /tmp/dockerize.tar.gz

COPY package*.json ./

RUN npm install

COPY . .

COPY .env .env

RUN npx prisma generate

EXPOSE 3000

CMD ["sh", "-c", "sleep 10 && dockerize -wait tcp://db:3306 -timeout 20s npx prisma migrate dev --name init && npm run dev"]
