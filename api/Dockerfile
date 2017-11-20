FROM keymetrics/pm2-docker-alpine:latest

RUN mkdir -p /code
WORKDIR /code

COPY . .
RUN npm install

RUN rm -f db.json

EXPOSE 6500

ENV DEBUG Activate:*
CMD ["pm2-docker", "start", "/code/index.js"]
