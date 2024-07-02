FROM node:14
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

COPY docker-entrypoint.sh /usr/src/app/docker-entrypoint.sh
RUN chmod +x /usr/src/app/docker-entrypoint.sh

EXPOSE 3000
EXPOSE 3306

ENTRYPOINT ["/usr/src/app/docker-entrypoint.sh"]

CMD ["npm", "run", "dev"]
