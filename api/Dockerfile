FROM keymetrics/pm2-docker-alpine:latest

RUN mkdir -p /code
WORKDIR /code

COPY . .
RUN npm install

RUN rm -f client_secret.json
RUN rm -rf .credentials
RUN rm -f db.json

EXPOSE 6500

CMD ["pm2-docker", "start", "/code/index.js"]
